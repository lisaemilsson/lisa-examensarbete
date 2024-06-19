import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from '../components/container'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
export default Layout