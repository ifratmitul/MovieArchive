import { environment } from "src/environments/environment";

export const baseConfig = {
    baseUrl: environment.baseUrl,
    api_key: environment.api_key,
    imageBaseUrl: environment.imageBaseUrl,
    lang: 'en-US',
    darkModeToken: 'darkMode'
}