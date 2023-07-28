import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex 
    flex-col
    justify-between
    items-center`}>
      <Title title="Welcome"></Title>
      <Login></Login>
    </main>
  )
}
