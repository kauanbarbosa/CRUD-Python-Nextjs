import React from 'react'
import axios from 'axios'
import Link from 'next/link'


export default function Login() {

    async function loginValidate() {
        const login = document.getElementById('login')
        const password = document.getElementById('password')
        const url = "http://127.0.0.1:3000/login"

        if (login.value === '') {
            login?.setAttribute('class', `mt-1 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none border-red-500 focus:ring-1 ring-red-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`)
            if (password.value === '') {
                password?.setAttribute('class', `mt-1 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none border-red-500 focus:ring-1 ring-red-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500`)
                window.alert('Complete all inputs!')
                return
            }
            window.alert('Complete all inputs!')
            return
        }
        if (password.value === '') {
            password?.setAttribute('class', `mt-1 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none border-red-500 focus:ring-1 ring-red-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`)
            window.alert('Invalid password!')
            return
        }

        const loginObj = { login: login.value, password: password.value }

        await axios.post(url, loginObj)
            .then(async response => {
                if (response.data.length == 1) {
                    await sessionStorage.setItem('login', `${login.value}`)
                    window.location.href = 'http://localhost:3000/panel'
                    return
                } else {
                    password?.setAttribute('class', `mt-1 block w-full px-3 py-2 bg-white border border-red-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none border-red-500 focus:ring-1 ring-red-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`)
                    window.alert('Invalid password!')
                    return
                }
            })
            .catch(erro => console.log(erro))

    }

    return (
        <div className={`
            flex flex-col
            justify-center 
            align-center
            p-8
            bg-white
            rounded-lg
            drop-shadow-lg
            w-64
            m-32
        `}>
            <label className="text-black">Login</label>
            <input id="login" className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`} type="text" />
            <label className="text-black mt-4">Senha</label>
            <input id="password" type="password" className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`} />
            <button onClick={loginValidate} className={`
            bg-orange-500 hover:bg-orange-400 text-white font-bold px-2 border-b-4 border-orange-700 hover:border-orange-500 rounded
            mt-4 w-min self-center
            `}>Entrar</button>
        </div>
    )
}