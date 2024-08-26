// auth.js

import { PublicClientApplication } from "@azure/msal-browser";
import dotenv from "dotenv";

dotenv.config();

// MSAL configuration
const msalConfig = {
  auth: {
    clientId: '9575f570-860e-4801-8142-682ec0129c27', // Replace with your Azure AD App client ID
    authority: `https://login.microsoftonline.com/f939db98-9ab3-4b52-8e5a-0d2b6168b56a`, // Replace with your tenant ID
    redirectUri: 'http://localhost', // Change to your redirect URI
  },
};

// Create a PublicClientApplication instance
const msalInstance = new PublicClientApplication(msalConfig);

// Login and acquire token
export async function getToken() {
  const loginRequest = {
    scopes: ["Files.ReadWrite.All", "Sites.ReadWrite.All"],
  };

  try {
    const loginResponse = await msalInstance.loginPopup(loginRequest);
    const tokenResponse = await msalInstance.acquireTokenSilent({
      account: loginResponse.account,
      scopes: loginRequest.scopes,
    });
    return tokenResponse.accessToken;
  } catch (error) {
    console.error("Error acquiring token:", error);
  }
}
