import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='min-h-screen'>
      <body className='flex flex-col max-w-screen-xl min-h-screen ml-auto mr-auto text-white'>
        <Navbar />
        <main className='mt-20 ml-20 mr-20'>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
