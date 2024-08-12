import personalWeb from '@/personal/riyuan/assets/images/personalWebsite.png'

/**
 * Defines the Project type
 * A project includes a name, description, and image source
 */
export type Project = {
  name: string
  description: string
  imgSrc: string
}

/**
 * An array of project objects
 * Each project contains information about a specific project to be displayed
 */
export const projects: Project[] = [
  {
    name: 'Personal Website',
    description:
      "This website is a space where I share my experiences, interests, and personal projects. If you're interested in learning more about me and my work, keep scrolling to explore my skills and projects.",
    imgSrc: personalWeb,
  },
  {
    name: 'SpaceCraft Shooter',
    description:
      "This website is a space where I share my experiences, interests, and personal projects. If you're interested in learning more about me and my work, keep scrolling to explore my skills and projects.",
    imgSrc: personalWeb,
  },
  {
    name: 'Personal Website',
    description:
      "This website is a space where I share my experiences, interests, and personal projects. If you're interested in learning more about me and my work, keep scrolling to explore my skills and projects.",
    imgSrc: personalWeb,
  },
]
