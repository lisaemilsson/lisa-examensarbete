export type Project = {
  slug: string
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description:
      'My first react-app ever',
    image:
      '/resume2.png',
  },
  {
    slug: 'rock-paper-scissor',
    title: 'Rock Paper Scissor',
    description:
      'A fully functional rock paper scissors using javascript and css',
    image:
      '/sicssor_papper_rock.jpg',
  },
  {
    slug: 'traffic-light',
    title: 'Traffic Light',
    description:
      'A CSS design to mimic a traffic light',
    image:
      '/img_traffic.png',
  },
  {
    slug: 'guessing-game',
    title: 'Guessing game',
    description:
      'A simple game written in JS + CSS to guess numbers',
    image:
      '/guessing.jpg',
  },
]
