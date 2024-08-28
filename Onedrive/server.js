const express = require('express');
const axios = require('axios');
const Qs = require('qs');
const cors = require('cors');  // Import the CORS middleware
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const { Client } = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch'); // Needed for Node.js
require('dotenv').config();
const { ConfidentialClientApplication } = require('@azure/msal-node');
const stream = require('stream');
const util = require('util');

// Enable CORS for all routes and origins
app.use(cors());

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/get-token', async (req, res) => {
    //console.log('Request body:', req.body);
    const {client_id, client_secret, tenant_id, scope, grant_type} = req.body;

    const token_url = `https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token`;

    const payload = {
        client_id,
        client_secret,
        tenant_id,
        scope,
        grant_type
    };

    try {
        const response = await axios.post(token_url, Qs.stringify(payload), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        res.json({ access_token: response.data.access_token });
    } catch (error) {
        console.error('Error fetching access token:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching access token' });
    }
});

// Endpoint to download a file
/*app.get('/download-file', async (req, res) => {

    const { itemId, accessToken, driveId , name} = req.query;

    const downloadUrl = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${itemId}`;

    try {
        const response = await axios.get(downloadUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/octet-stream'
            },
            responseType: 'arraybuffer' // Important for binary data
        });

        // Set the appropriate headers for file download
        //res.setHeader('Content-Disposition', `attachment; filename=${req.query.filename || 'downloaded_file.xlsx'}`);
        res.setHeader('Content-Disposition', `attachment; filename=${req.query.filename}`);
        res.setHeader('Content-Type', response.headers['content-type']);

        // Send the file buffer
        res.send(response.data);
    } catch (error) {
        console.error('Error downloading file:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error downloading file' });
    }
}); */


// Read Excel file worksheets
/*app.get('/workbook/worksheets/:driveId/:itemId', async (req, res) => {
    const { driveId, itemId } = req.params;
    const { accessToken, sessionId } = req.headers;

    try {
        const response = await axios.get(`https://graph.microsoft.com/v1.0/drives/${driveId}/items/${itemId}/workbook/worksheets`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'workbook-session-id': sessionId || ''
            }
        });
        res.json(response.data);

    } catch (error) {
        console.error('Error reading workbook worksheets:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error reading workbook worksheets' });
    }

});*/


// Endpoint to fetch Excel data
/*app.get('/fetch-excel-data', async (req, res) => {
    const { itemId, driveId, worksheetId, rangeAddress } = req.query;
    

    try {
        // Get access token
        const tokenResponse = await axios.post(`https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token`, qs.stringify({
            client_id,
            client_secret,
            tenant_id,
            scope,
            grant_type
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Fetch Excel data
        const rangeUrl = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${itemId}/workbook/worksheets/${worksheetId}/range(address='${rangeAddress}')`;

        const response = await axios.get(rangeUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Excel data:', error.response ? error.response.data : error.message);
        res.status(500).send('Error fetching Excel data.');
    }
});*/

app.listen(3000, () => {
    console.log('Backend server running on http://localhost:3000');
});