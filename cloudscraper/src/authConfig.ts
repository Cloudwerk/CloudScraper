export const msalConfig = {
    auth: {
        clientId: 'fa5aa203-252e-40d0-be4d-3ac69c015e83',
        authority:'https://login.microsoftonline.com/common/',
        redirectUri: 'http://localhost:3000'
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
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

// https://cloudscraper.z6.web.core.windows.net/

// value u6K8Q~J3D6bshSAS_yaPXvCW_47deL.m_GyCJaHY
// secret id a0d1527e-720d-4cbd-984b-a500dd30fb95