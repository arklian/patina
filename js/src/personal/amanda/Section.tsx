interface Project {
  id: number
  title: string
  description: string
  skills: String[]
}

export interface Section {
  id: number
  title: string
  link: string
  description: string
  subsections: Project[]
}
