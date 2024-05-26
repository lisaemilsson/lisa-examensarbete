export type Project = {
  slug: string
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'examensarbete',
    title: 'Examensarbete',
    description:
      'Mitt examensarbete',
    image:
      '/paperpen.jpg',
  },
  {
    slug: 'accessibility',
    title: 'Tillgänglighet',
    description:
      'Mitt arbete med tillgänglighet',
    image:
      '/accessibility.png',
  },
]
