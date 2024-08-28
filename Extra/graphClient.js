// graphClient.js

import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";  // Needed for node.js
import { getToken } from "./auth"; // Import the authentication function

// Initialize Graph client
async function getGraphClient() {
  const accessToken = await getToken();

  const client = Client.init({
    authProvider: (done) => {
      done(null, accessToken); // Provide the access token
    },
  });

  return client;
}

// Get Excel file content
export async function readExcelFile() {
  const client = await getGraphClient();

  try {
    // Get user's OneDrive root folder
    const driveItems = await client.api("/me/drive/root/children").get();

    // Find your Excel file in the OneDrive items
    const excelFile = driveItems.value.find((item) => item.name === "your-file.xlsx"); // Replace with your Excel file name

    if (excelFile) {
      // Access Excel file content
      const excelWorkbook = await client
        .api(`/me/drive/items/${excelFile.id}/workbook`)
        .get();

      console.log("Workbook details:", excelWorkbook);
    } else {
      console.log("Excel file not found");
    }
  } catch (error) {
    console.error("Error reading Excel file:", error);
  }
}

// Call the function to read Excel file
readExcelFile();
