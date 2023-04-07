import { domain, clientId } from 'auth_config.json';
export const environment = {
    production: false,
    auth: {
        domain,
        clientId,
        redirectUrl: window.location.origin
    }
};
