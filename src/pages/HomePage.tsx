import LandingSection from '../components/LandingSection'
import ProjectsSection from '../components/ProjectsSection'
import { Container } from '../components/container'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <Container>
    <Helmet>
      <title>Welcome to my Portfolio</title>
    </Helmet>
    <LandingSection />
    <ProjectsSection />
  </Container>
  )
}
export default HomePage
