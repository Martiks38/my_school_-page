export type Course = {
	course: string
	id: string
	url: string
}

export type TechniqueTypes = 'electronica' | 'electromecanica' | 'renovables'

export type ListItem = {
	id: string
	item: string
}[]

export type TechnicalSection = {
	[index in 'Tercer' | 'Cuarto' | 'Quinto' | 'Sexto']: {
		id: string
		name: string
	}[]
}

export type Video = {
	[index in TechniqueTypes]: string
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
