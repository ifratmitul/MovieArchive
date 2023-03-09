import { baseConfig } from "./baseConfig";

export const tvShowConfig = {
    defaultLanguage : baseConfig.lang,
    popularTvShowEndpoints : `${baseConfig.baseUrl}tv/popular`,
    todaysTvShowEndpoints : `${baseConfig.baseUrl}tv/airing_today`,
    tvShowDetails : `${baseConfig.baseUrl}tv`
}