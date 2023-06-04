import { Inter } from 'next/font/google'
import Layout from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <div className='flex flex-col justify-between mt-20 space-y-16'>
      <div className='self-center text-2xl text-white'>🚧 Under Construction... 🚧</div>
    </div>
    </Layout>
  )
}
