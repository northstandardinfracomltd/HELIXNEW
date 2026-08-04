/**
 * Google Apps Script for FlyPerceval Flight Requests
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet where you added the following column headers on Sheet 1 (Feuille 1):
 *    FullName | EmailAddress | RouteDest | Aircraft | DateTime | Passengers | Dual | Requirements
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any default code in Code.gs and paste this script.
 * 4. Click the blue "Deploy" button at the top right, then select "New deployment".
 * 5. Choose "Web app" as the deployment type:
 *    - Description: FlyPerceval Form Submissions
 *    - Execute as: Me (your-email@gmail.com)
 *    - Who has access: Anyone
 * 6. Click "Deploy", authorize the permissions, and copy the "Web app URL".
 * 7. Set this URL in the application environment variables as VITE_APPSCRIPT_URL.
 */

function doPost(e) {
  // Handle CORS Preflight / POST response headers
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  try {
    var data;
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    } else {
      throw new Error("No payload or parameters detected.");
    }

    // Get the first sheet of the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Add row to spreadsheet with exact requested headers matching properties:
    // FullName | EmailAddress | RouteDest | Aircraft | DateTime | Passengers | Dual | Requirements
    sheet.appendRow([
      data.FullName || "",
      data.EmailAddress || "",
      data.RouteDest || "",
      data.Aircraft || "",
      data.DateTime || "",
      data.Passengers || "",
      data.Dual || "",
      data.Requirements || ""
    ]);
    
    // Send email notification to contact@flyperceval.com
    var recipient = "contact@flyperceval.com";
    var subject = "⚠️ Nouvelle demande de vol privée - FlyPerceval";
    
    var emailBody = "Une nouvelle demande de vol a été reçue et enregistrée dans Google Sheets :\n\n" +
                    "• Nom Complet : " + (data.FullName || "N/A") + "\n" +
                    "• Adresse E-mail : " + (data.EmailAddress || "N/A") + "\n" +
                    "• Itinéraire / Destination : " + (data.RouteDest || "N/A") + "\n" +
                    "• Appareil sélectionné : " + (data.Aircraft || "N/A") + "\n" +
                    "• Date & Heure : " + (data.DateTime || "N/A") + "\n" +
                    "• Nombre de Passagers : " + (data.Passengers || "N/A") + "\n" +
                    "• Option Double Pilote (Dual) : " + (data.Dual || "N/A") + "\n" +
                    "• Exigences particulières : \n" + (data.Requirements || "Aucune") + "\n\n" +
                    "— Généré automatiquement par l'application FlyPerceval.";

    MailApp.sendEmail(recipient, subject, emailBody);

    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Form submission added successfully. Email notification sent." 
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  var output = ContentService.createTextOutput();
  return output;
}
