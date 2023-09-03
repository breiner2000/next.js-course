import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import Posts from './components/Posts'

export const metadata = {
  title: 'Mizingo Blog',
  description: 'Created by Breiner Carranza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar/>
        <MyProfilePic/>
        {children}
        <Posts/>
      </body>
    </html>
  )
}
