import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Layout from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </Layout>
    
  )
}
