import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certs } from './components/Certs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Experience />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
