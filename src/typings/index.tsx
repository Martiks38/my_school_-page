export type Course = {
	id: string
	course: string
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
