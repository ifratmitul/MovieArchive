import { baseConfig } from "./baseConfig";

export const movieConfig = {
    defaultLanguage : baseConfig.lang,
    popularMovieEndPoint: `${baseConfig.baseUrl}movie/popular`,
    latestMovieEndPoint: `${baseConfig.baseUrl}movie/now_playing`,
    searchMovieEndPoint: `${baseConfig.baseUrl}search/movie`
}