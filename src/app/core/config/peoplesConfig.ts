import { baseConfig } from "./baseConfig";

export const peoplesConfig = {
    language:  baseConfig.lang,
    peoplePopularEndpoints : `${baseConfig.baseUrl}person/popular`,
    peopleDetailsEndpoints : `${baseConfig.baseUrl}person`
}