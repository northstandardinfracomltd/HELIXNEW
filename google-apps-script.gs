/**
 * Google Apps Script pour HeliBaleares - Enregistrement des demandes de vol dans Google Sheets
 * 
 * INSTRUCTIONS D'INSTALLATION :
 * 1. Ouvrez un nouveau Google Sheet (Feuille de calcul Google).
 * 2. Sur la première ligne (Ligne 1 / En-têtes), inscrivez dans les colonnes A à J :
 *    Horodateur | Nom | Email | Téléphone | Itinéraire | Appareil | Date & Créneau | Passagers | Double Pilote | Exigences
 * 3. Allez dans le menu "Extensions" > "Apps Script".
 * 4. Effacez tout le code présent dans Code.gs et collez le script ci-dessous.
 * 5. Cliquez sur "Enregistrer" (icône disquette), puis cliquez sur le bouton bleu "Déployer" > "Nouveau déploiement".
 * 6. Cliquez sur l'icône pignon à côté de "Sélectionner le type" et choisissez "Application Web" (Web app) :
 *    - Description : HeliBaleares Submissions
 *    - Exécuter en tant que : Moi (votre adresse Gmail / Google Workspace)
 *    - Qui a accès : Tout le monde (Anyone)  <-- TRÈS IMPORTANT !
 * 7. Cliquez sur "Déployer", autorisez les accès Google si demandé, puis COPIEZ l'URL de l'application Web générée.
 * 8. Ajoutez cette URL dans les variables d'environnement (Settings) comme VITE_APPSCRIPT_URL.
 */

function doPost(e) {
  try {
    var data;
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    } else {
      throw new Error("Aucune donnée reçue dans le corps de la requête.");
    }

    // Récupérer la première feuille du Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Horodateur de la demande
    var timestamp = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Madrid" });

    // Ajout d'une nouvelle ligne dans le Google Sheet avec les en-têtes correspondants
    sheet.appendRow([
      timestamp,
      data.FullName || "",
      data.EmailAddress || "",
      data.PhoneWhatsApp || "",
      data.RouteDest || "",
      data.Aircraft || "",
      data.DateTime || "",
      data.Passengers || "",
      data.Dual || "",
      data.Requirements || ""
    ]);

    // Notification email automatique vers infos@helibaleares.com
    try {
      var recipient = "infos@helibaleares.com";
      var subject = "⚠️ Nouvelle demande de vol - " + (data.FullName || "Client");
      var emailBody = "Une nouvelle demande de vol a été enregistrée dans votre Google Sheet :\n\n" +
                      "• Horodateur : " + timestamp + "\n" +
                      "• Nom Complet : " + (data.FullName || "N/A") + "\n" +
                      "• Adresse E-mail : " + (data.EmailAddress || "N/A") + "\n" +
                      "• Téléphone / WhatsApp : " + (data.PhoneWhatsApp || "N/A") + "\n" +
                      "• Itinéraire / Destination : " + (data.RouteDest || "N/A") + "\n" +
                      "• Appareil : " + (data.Aircraft || "N/A") + "\n" +
                      "• Date & Créneau : " + (data.DateTime || "N/A") + "\n" +
                      "• Nombre de Passagers : " + (data.Passengers || "N/A") + "\n" +
                      "• Option Double Pilote : " + (data.Dual || "N/A") + "\n" +
                      "• Exigences / Remarques : " + (data.Requirements || "Aucune") + "\n\n" +
                      "— Message envoyé automatiquement depuis helibaleares.com.";

      MailApp.sendEmail(recipient, subject, emailBody);
    } catch (emailError) {
      Logger.log("Info/Avertissement envoi email: " + emailError.toString());
    }

    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Demande enregistrée dans le Google Sheet avec succès !" 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("HeliBaleares Google Apps Script Web App active.");
}
