import { ParsedUrlQuery } from 'querystring'

export interface ParamsNotice extends ParsedUrlQuery {
	title: string
}

export interface ParamsTechniques extends ParsedUrlQuery {
	technique: string
}

export interface Technique {
	technique: string
	imageSrc: string
	imageAlt: string
	iframe: string
	profileId: string
	responsibilitiesId: string
	subjectId: string
}

export interface TechniqueData extends Technique {
	__html: string
}

export interface News {
	description: string
	id: string
	publishedAt: string
	title: string
}

export interface NewsData extends News {
	slug: string
}

export type Article = {
	body: string
	description: string
	publishedAt: string
	title: string
}

export type Course = {
	course: string
	id: string
	url: string
}
