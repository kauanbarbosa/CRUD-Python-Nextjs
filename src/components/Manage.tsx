import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import axios from 'axios';




export default function ManagePage() {
    const router = useRouter();
    const { id, name: defaultName, login: defaultLogin, password: defaultPassword } = router.query;

    // Estados para controlar os valores dos inputs
    const [name, setName] = useState(defaultName || '');
    const [login, setLogin] = useState(defaultLogin || '');
    const [password, setPassword] = useState(defaultPassword || '');

    useEffect(() => {
        setName(defaultName || '');
        setLogin(defaultLogin || '');
        setPassword(defaultPassword || '');
    }, [defaultName, defaultLogin, defaultPassword]);

    // Funções para manipular os dados
    const savePerson = async () => {
        const url = "http://127.0.0.1:3000/employees";
        const objPerson = { id, login, name, password }; // Acessando os estados aqui

        try {
            await axios.put(url, objPerson);
            window.alert(`Person ID: ${id} updated!`);
            window.location.href = "http://localhost:3000/employees"
        } catch (error) {
            console.log(error);
        }
    };

    const addPerson = async () => {
        const url = "http://127.0.0.1:3000/employees";
        const objPerson = { login, name, password }; // Acessando os estados aqui

        try {
            await axios.post(url, objPerson);
            window.alert(`Person inserted!`);
            window.location.href = "http://localhost:3000/employees"
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`
            flex flex-col items-center justify-center align-start col-span-10
        `}>
            {id ? (
                <>
                    <span className="font-bold text-orange-500 drop-shadow-sm text-4xl mt-2">Edit person</span>
                    <span id="id" className="font-medium text-orange-500 mt-5">ID: {id}</span>
                    <label className='font-medium text-orange-400'>Name</label>
                    <input id="name" defaultValue={name} onChange={(e) => setName(e.target.value)} className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}></input>
                    <label className='mt-4 font-medium text-orange-400'>Login</label>
                    <input id="login" defaultValue={login} onChange={(e) => setLogin(e.target.value)} className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}></input>
                    <label className='mt-4 font-medium text-orange-400'>Password</label>
                    <input id="password" type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}></input>
                    <div className='mt-4 flex flex-row align-center items-center '>
                    <button onClick={() => savePerson()} className='bg-green-500 text-white p-2 w-20 rounded-xl'><i className="fa fa-check" style={{color: 'white'}}></i></button>
                    <Link href="/employees" className={`
                        bg-red-500 text-white w-20 p-2 rounded-xl text-center
                        `}><i className="fa fa-times" style={{color: 'white'}}></i></Link>
                    </div>
                </>
            ) : (
                <>
                    <span className="font-bold text-orange-500 drop-shadow-sm text-4xl mt-2">New person</span>
                    <label className='font-medium text-orange-400 mt-5'>Name</label>
                    <input className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}
                     id="name" type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                    <label className='mt-4 font-medium text-orange-400'>Login</label>
                    <input id="login" type="text" defaultValue={login} onChange={(e) => setLogin(e.target.value)} className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}></input>
                    <label className='mt-4 font-medium text-orange-400'>Password</label>
                    <input  id="password" type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} className={`
                    font-medium text-orange-500 p-2 drop-shadow-sm rounded-xl text-center`}></input>
                    <div className='mt-4 flex flex-row align-center items-center '>
                    <button onClick={() => addPerson()} className='bg-green-500 text-white p-2 w-20 rounded-xl'><i className="fa fa-check" style={{color: 'white'}}></i></button>
                    <Link href="/employees" className={`
                        bg-red-500 text-white w-20 p-2 rounded-xl text-center
                        `}><i className="fa fa-times" style={{color: 'white'}}></i></Link>
                    </div>
                </>
            )}
        </div>
    );
}