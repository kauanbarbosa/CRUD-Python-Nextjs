import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import Board from '@/components/Panel'
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Panel() {

  useEffect(() => {
    const login = sessionStorage.getItem('login');
    const loginElement = document.getElementById('login');
    if (login && loginElement) {
      loginElement.innerText = login;
    }
  }, []);

  return (
    <main className={`flex 
    flex-col
    justify-between
    items-center`}>
      <Title title="Control Panel"></Title>
      <Board name="Company" href="/">
        <Link href="/employees" className="col-span-3 bg-[#c20547] h-max w-max p-20 rounded-3xl hover:drop-shadow-lg text-center text-white font-thin hover:duration-300 text-4xl"><i className="fa fa-user" style={{ color: "white" }}></i><br></br>Employees</Link>
        <span className="text-xl text-black-500 font-bold col-span-5 mt-10">
          Login: <span id="login"></span>
        </span>
      </Board>
    </main>
  )
}
