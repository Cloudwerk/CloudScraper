export const msalConfig = {
    auth: {
        clientId: 'fa5aa203-252e-40d0-be4d-3ac69c015e83',
        authority:'https://login.microsoftonline.com/common/',
        redirectUri: 'http://localhost:3000'
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: [
        "User.Read",
        "Sites.Read.All"
    ]
};

export const graphConfig = {
    graphEndPoint: "https://graph.microsoft.com/v1.0/sites?search=*"
};