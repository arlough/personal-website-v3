import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Now from '@/components/Now'
import Layout from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      {/* <Now></Now> */}
    </Layout>
    
  )
}
