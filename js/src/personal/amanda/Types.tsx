export type Project = {
  id: number
  title: string
  link: string
  image: string
  description: string
  skills: String[]
}

export type Section = {
  id: number
  title: string
  link: string
  description: string
  subsections: Project[]
}

export type ResumeContent = {
  id: number
  title: string
  subtitle: string
  link: string
  date: string
  info: string[]
}

export type ResumeSection = {
  id: number
  title: string
  content: ResumeContent[]
}

export type NavbarSection = {
  section: string
  link: string
}
