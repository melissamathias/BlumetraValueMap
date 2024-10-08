// Import necessary modules
const axios = require('axios');
const Qs = require('qs');

// Define your app's Azure AD credentials
const client_id = "9575f570-860e-4801-8142-682ec0129c27";
const client_secret = "Wi68Q~SLQ-1eM2XKzXamujdvdTzt5tOTKpFSybe.";
const tenant_id = "f939db98-9ab3-4b52-8e5a-0d2b6168b56a";
const scope = 'https://graph.microsoft.com/.default';
const grant_type = 'client_credentials';
const username = 'Melissa.Mathias@blumetra.com';
const id='dcd86cce-36cd-4be2-bac7-6ce7e0dbde39';

// Authentication function to get access token
async function getAccessToken() {
    const tokenEndpoint = `https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token`;

    const requestBody = {
        client_id,
        client_secret,
        scope,
        grant_type
    };

    try {
        const response = await axios.post(tokenEndpoint, Qs.stringify(requestBody), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        return response.data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw error;
    }
}

// Function to get the Excel file from OneDrive
async function getExcelFile(accessToken, itemId) {
    const graphEndpoint = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/content`;

    try {
        const response = await axios.get(graphEndpoint, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            },
            responseType: 'arraybuffer'
        });

        console.log("Excel file retrieved successfully!");

        // Handle the Excel file here (e.g., save to disk, process, etc.)
        // For demonstration, save the file to the local system
        const fs = require('fs');
        fs.writeFileSync('spreadsheet.xlsx', response.data);

        console.log("Excel file saved as 'spreadsheet.xlsx'");
    } catch (error) {
        console.error("Error retrieving Excel file:", error);
    }
}

// Main function to execute the script
async function main() {
    try {
        const accessToken = await getAccessToken();
        const itemId = 'YOUR_EXCEL_FILE_ITEM_ID'; // Replace with the actual file ID
        await getExcelFile(accessToken, itemId);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Execute the main function
main();
