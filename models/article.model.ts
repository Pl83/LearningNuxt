import { Image, Meta } from "~/models/strapi.model"
import { Popularity } from '~/models/popularity.model'

export interface Article {
    id: number
    title: string
    intro: string
    created_at: Date
    updated_at: Date
    published_at: Date
    image: Image
    popularity: Popularity
}

export interface ArticleResponse {
    data: Article
}


export interface ArticlesResponse {
    data: Article[]
    meta: Meta
}