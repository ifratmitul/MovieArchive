export type MoviesDetails = {
    adult: boolean
    backdrop_path: string
    id: number
    name?: string
    original_language: string
    original_name?: string
    original_title?:string
    overview: string
    poster_path: string
    media_type?: string
    genre_ids: number[]
    popularity: number
    first_air_date?: string
    vote_average: number
    vote_count: number
    release_date?: string
    origin_country?: string[]
    video?: boolean
    title?:string
    genres?: any[]
}