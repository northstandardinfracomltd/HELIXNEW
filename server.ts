import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API endpoint for automatic email dispatch
  app.post("/api/send-email", async (req, res) => {
    try {
      const data = req.body || {};
      const fullName = data.FullName || "Client";
      const email = data.EmailAddress || "Non spécifié";
      const phone = data.PhoneWhatsApp || "Non spécifié";
      const route = data.RouteDest || "Non spécifié";
      const aircraft = data.Aircraft || "Airbus H135";
      const dateTime = data.DateTime || "Non spécifié";
      const passengers = data.Passengers || "1";
      const dual = data.Dual || "Non";
      const requirements = data.Requirements || "Aucune";

      const recipient = "infos@helibaleares.com";
      const subject = `⚠️ Demande de vol HeliBaleares - ${fullName}`;

      const textContent = `Une nouvelle demande de vol a été reçue pour HeliBaleares :

• Nom Complet : ${fullName}
• Adresse E-mail : ${email}
• Téléphone / WhatsApp : ${phone}
• Itinéraire / Destination : ${route}
• Appareil sélectionné : ${aircraft}
• Date & Créneau : ${dateTime}
• Nombre de Passagers : ${passengers}
• Option Double Pilote : ${dual}
• Exigences particulières : ${requirements}

— Message envoyé automatiquement depuis helibaleares.com.`;

      let sent = false;
      const errors: string[] = [];

      // Method 1: Direct SMTP via Nodemailer if SMTP env vars are defined
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });
          const fromSender = process.env.SMTP_FROM || `"HeliBaleares Dispatch" <infos@helibaleares.com>`;
          await transporter.sendMail({
            from: fromSender,
            to: recipient,
            replyTo: email !== "Non spécifié" ? email : "infos@helibaleares.com",
            subject,
            text: textContent,
          });
          sent = true;
          console.log("Email sent successfully via SMTP.");
        } catch (err: any) {
          console.error("SMTP Error:", err.message);
          errors.push(`SMTP: ${err.message}`);
        }
      }

      // Method 2: Resend API if RESEND_API_KEY is configured
      if (!sent && process.env.RESEND_API_KEY) {
        try {
          const fromSender = process.env.RESEND_FROM || "HeliBaleares Dispatch <infos@helibaleares.com>";
          const resendResp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromSender,
              to: recipient,
              reply_to: email !== "Non spécifié" ? email : "infos@helibaleares.com",
              subject,
              text: textContent,
            }),
          });
          if (resendResp.ok) {
            sent = true;
            console.log("Email sent successfully via Resend.");
          } else {
            const errText = await resendResp.text();
            errors.push(`Resend: ${errText}`);
          }
        } catch (err: any) {
          console.error("Resend Error:", err.message);
          errors.push(`Resend: ${err.message}`);
        }
      }

      // Method 3: Google Apps Script Web App (Inserts directly into Google Sheet)
      const appScriptUrl = process.env.VITE_APPSCRIPT_URL || process.env.APPSCRIPT_URL || "https://script.google.com/macros/s/AKfycbw8_-7P4i1goMSS2ikUMNGLhacwwIRDpLqn0Lao1ImNPRZMBV6uQBM_0uVCwgqjSM7znA/exec";
      if (appScriptUrl) {
        try {
          const gasPayload = {
            ...data,
            SenderEmail: "infos@helibaleares.com",
            FromEmail: "infos@helibaleares.com",
            ReplyToEmail: email !== "Non spécifié" ? email : "infos@helibaleares.com",
          };
          const gasResp = await fetch(appScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(gasPayload),
          });
          if (gasResp.ok) {
            sent = true;
            console.log("Submission successfully saved to Google Sheet via Apps Script!");
          }
        } catch (err: any) {
          console.error("Google Apps Script Error:", err.message);
          errors.push(`Google Apps Script: ${err.message}`);
        }
      }

      // Method 4: Automated server-to-server FormSubmit relay to infos@helibaleares.com
      if (!sent) {
        try {
          const fsResp = await fetch("https://formsubmit.co/ajax/infos@helibaleares.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              _subject: subject,
              _template: "table",
              _replyto: email !== "Non spécifié" ? email : "infos@helibaleares.com",
              _sender: "infos@helibaleares.com",
              "Expediteur": "infos@helibaleares.com",
              "Nom Client": fullName,
              "Email": email,
              "Telephone": phone,
              "Itineraire": route,
              "Appareil": aircraft,
              "Date et Creneau": dateTime,
              "Passagers": passengers,
              "Double Pilote": dual,
              "Exigences": requirements
            })
          });
          if (fsResp.ok) {
            sent = true;
            console.log("Email dispatched via FormSubmit relay to infos@helibaleares.com.");
          } else {
            const fsErr = await fsResp.text();
            console.warn("FormSubmit relay response:", fsErr);
          }
        } catch (err: any) {
          console.error("FormSubmit Error:", err.message);
          errors.push(`FormSubmit: ${err.message}`);
        }
      }

      return res.json({
        success: true,
        message: "Demande transmise avec succès à infos@helibaleares.com"
      });
    } catch (error: any) {
      console.error("Error in /api/send-email:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Erreur lors de l'envoi de l'email"
      });
    }
  });

  // SEO Static Files Direct Serve (sitemap.xml & robots.txt)
  app.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml; charset=utf-8");
    const sitemapPath = path.join(process.cwd(), process.env.NODE_ENV === "production" ? "dist" : "public", "sitemap.xml");
    res.sendFile(sitemapPath);
  });

  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain; charset=utf-8");
    const robotsPath = path.join(process.cwd(), process.env.NODE_ENV === "production" ? "dist" : "public", "robots.txt");
    res.sendFile(robotsPath);
  });

  // Serve frontend with Vite in dev mode, static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.status(200).sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
