import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper to generate professional English client confirmation HTML email
  function generateClientConfirmationHtml(data: {
    fullName: string;
    route: string;
    aircraft: string;
    dateTime: string;
    passengers: string;
    requirements: string;
  }) {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flight Request Confirmation - HeliBaleares S.A.</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <!-- Header banner -->
    <tr>
      <td style="background-color: #0f172a; padding: 32px 28px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">HELIBALEARES S.A.</h1>
        <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Executive Helicopter Charter</p>
      </td>
    </tr>

    <!-- Body content -->
    <tr>
      <td style="padding: 32px 28px;">
        <p style="font-size: 16px; margin: 0 0 16px 0;">Dear <strong>${data.fullName}</strong>,</p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 20px 0;">
          Thank you for choosing <strong>HeliBaleares S.A.</strong> We have successfully received your private helicopter charter inquiry.
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 20px 0;">
          Our flight operations and dispatch coordination desk are currently reviewing aircraft availability and route parameters:
        </p>

        <!-- Summary card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin: 20px 0; padding: 18px 20px;">
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 40%;"><strong>Route / Destination:</strong></td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${data.route}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Selected Aircraft:</strong></td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${data.aircraft}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Requested Schedule:</strong></td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${data.dateTime}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Passengers:</strong></td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${data.passengers}</td>
          </tr>
          ${data.requirements && data.requirements !== "Aucune" && data.requirements !== "None" ? `
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Special Notes:</strong></td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${data.requirements}</td>
          </tr>` : ''}
        </table>

        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 20px 0;">
          A dedicated flight coordinator will contact you promptly with an official quotation and detailed operational flight plan.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #64748b; margin: 20px 0;">
          For urgent flight inquiries or last-minute VIP requests, our 24/7 operations desk is available at <a href="mailto:infos@helibaleares.com" style="color: #93294a; text-decoration: none; font-weight: 600;">infos@helibaleares.com</a>.
        </p>

        <div style="border-top: 1px solid #e2e8f0; margin-top: 28px; padding-top: 20px;">
          <p style="margin: 0; font-size: 14px; color: #64748b;">Warm regards,</p>
          <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #0f172a;">Flight Operations & Dispatch Team</p>
          <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">HeliBaleares S.A. | Balearic Islands, Spain</p>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f1f5f9; padding: 18px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
        Aeródromo de Son Bonet, E-07141 Marratxí, Mallorca · <a href="https://helibaleares.com" style="color: #93294a; text-decoration: none;">helibaleares.com</a>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
  }

  // API endpoint for automatic email dispatch
  app.post("/api/send-email", async (req, res) => {
    try {
      const data = req.body || {};
      const fullName = data.FullName || "Client";
      const email = data.EmailAddress && data.EmailAddress !== "Non spécifié" ? data.EmailAddress.trim() : "";
      const phone = data.PhoneWhatsApp || "Non spécifié";
      const route = data.RouteDest || "Non spécifié";
      const aircraft = data.Aircraft || "Airbus H135";
      const dateTime = data.DateTime || "Non spécifié";
      const passengers = data.Passengers || "1";
      const dual = data.Dual || "Non";
      const requirements = data.Requirements || "Aucune";

      const internalRecipient = "infos@helibaleares.com";
      const internalSubject = `⚠️ Demande de vol HeliBaleares - ${fullName}`;

      const internalText = `Nouvelle demande de vol reçue pour HeliBaleares :

• Nom Complet : ${fullName}
• Adresse E-mail : ${email || "Non spécifié"}
• Téléphone / WhatsApp : ${phone}
• Itinéraire / Destination : ${route}
• Appareil sélectionné : ${aircraft}
• Date & Créneau : ${dateTime}
• Nombre de Passagers : ${passengers}
• Option Double Pilote : ${dual}
• Exigences particulières : ${requirements}

— Message automatique HeliBaleares S.A.`;

      const clientSubject = "Flight Charter Request Confirmation - HeliBaleares S.A.";
      const clientHtml = generateClientConfirmationHtml({
        fullName,
        route,
        aircraft,
        dateTime,
        passengers,
        requirements
      });
      const clientText = `Dear ${fullName},

Thank you for contacting HeliBaleares S.A. We have successfully received your private helicopter charter request.

Flight Details:
• Route / Destination: ${route}
• Aircraft: ${aircraft}
• Schedule: ${dateTime}
• Passengers: ${passengers}
${requirements && requirements !== "Aucune" ? `• Special Notes: ${requirements}` : ""}

A dedicated flight coordinator will get back to you shortly with a personalized quotation.

Best regards,
Flight Operations & Dispatch Team
HeliBaleares S.A. | infos@helibaleares.com`;

      let adminSent = false;
      let clientSent = false;
      const logs: string[] = [];

      // 1. SMTP Transport (e.g. Apple iCloud, Gmail, Brevo, or custom SMTP)
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

          const fromAddress = process.env.SMTP_FROM || `"HeliBaleares Dispatch" <${process.env.SMTP_USER}>`;

          // Send internal notification
          await transporter.sendMail({
            from: fromAddress,
            to: internalRecipient,
            replyTo: email || "infos@helibaleares.com",
            subject: internalSubject,
            text: internalText,
          });
          adminSent = true;
          logs.push("Admin notification sent via SMTP");

          // Send client confirmation if email provided
          if (email && email.includes("@")) {
            await transporter.sendMail({
              from: `"HeliBaleares S.A." <infos@helibaleares.com>`,
              to: email,
              replyTo: "infos@helibaleares.com",
              subject: clientSubject,
              text: clientText,
              html: clientHtml,
            });
            clientSent = true;
            logs.push("Client acknowledgment email sent via SMTP");
          }
        } catch (smtpErr: any) {
          console.error("SMTP dispatch error:", smtpErr.message);
          logs.push(`SMTP Error: ${smtpErr.message}`);
        }
      }

      // 2. Resend API (High deliverability transactional email service)
      if (process.env.RESEND_API_KEY && (!adminSent || !clientSent)) {
        try {
          const fromSender = process.env.RESEND_FROM || "HeliBaleares Dispatch <onboarding@resend.dev>";
          
          if (!adminSent) {
            const resendAdmin = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                from: fromSender,
                to: internalRecipient,
                reply_to: email || "infos@helibaleares.com",
                subject: internalSubject,
                text: internalText,
              }),
            });
            if (resendAdmin.ok) adminSent = true;
          }

          if (email && email.includes("@") && !clientSent) {
            const resendClient = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                from: fromSender,
                to: email,
                reply_to: "infos@helibaleares.com",
                subject: clientSubject,
                text: clientText,
                html: clientHtml,
              }),
            });
            if (resendClient.ok) clientSent = true;
          }
          logs.push("Processed via Resend API");
        } catch (resendErr: any) {
          console.error("Resend dispatch error:", resendErr.message);
          logs.push(`Resend Error: ${resendErr.message}`);
        }
      }

      return res.json({
        success: true,
        adminSent,
        clientSent,
        logs,
        message: "Email dispatch routine completed."
      });
    } catch (error: any) {
      console.error("Error in /api/send-email:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal email handler error"
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
