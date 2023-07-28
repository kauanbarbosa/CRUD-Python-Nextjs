import Title from '@/components/Title'
import Board from '@/components/Panel'
import Link from 'next/link'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useState } from 'react'

async function getEmployees() {
    const url = "http://127.0.0.1:3000/employees";

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log('Erro ao buscar os dados:', error);
        return [];
    }
}

async function deleteEmployee(id: number) {
    const url = `http://127.0.0.1:3000/employees/${id}`
    if (window.confirm(`Do you want delete employee ${id}?`)) {
        await axios.delete(url)
        window.location.reload()
        return
    } else {
        return
    }
}

function editPerson(id: number, name: string, login: string, password: string) {
    window.location.href = `http://localhost:3000/manage?id=${id}&name=${name}&login=${login}&password=${password}`
    return
}

export default function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getEmployees();
            setEmployees(data);
        }
        fetchData();
    }, []);


    return (
        <main className={`flex 
          flex-col
          justify-between
          items-center`}
        >
            <Title title="Employees"></Title>
            <Board href="/panel">
                <Link href="/manage" className='rounded-md bg-green-500 p-2 w-12 h-10 hover:drop-shadow-md duration-300 ease-in text-center justify-self-end col-span-11 mt-3 mr-6'>
                    <i className="fa fa-plus" style={{ color: "white" }}></i>
                </Link>
                <table className='drop-shadow-sm col-span-12 rounded-md h-min bg-gradient-to-r mt-5 from-yellow-500 to-orange-500 w-100'>
                    <thead>
                        <tr>
                            <th className="text-white font-medium px-32 text-center">ID</th>
                            <th className="text-white font-medium px-32 text-center">NAME</th>
                            <th className="text-white font-medium px-32 text-center">LOGIN</th>
                            <th className="text-white font-medium px-32 text-center">PASSWORD</th>
                            <th className="text-white font-medium px-32 text-center">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((person, i) => (
                            <tr key={person[0]} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <td className='text-left text-center p-2 font-bold text-yellow-500'>{person[0]}</td>
                                <td className='text-left text-center p-2 font-medium text-yellow-600'>{person[1].toLowerCase()}</td>
                                <td className='text-left text-center p-2 font-medium text-orange-400'>{person[2]}</td>
                                <td className='text-left text-center p-2 font-medium text-orange-500'>{person[3]}</td>
                                <td className="flex justify-center">
                                    <button className='m-2' onClick={() => editPerson(person[0], person[1], person[2], person[3])}><i className="fa fa-pencil-square" style={{ color: 'orange' }}></i></button>
                                    <button onClick={() => deleteEmployee(person[0])}><i className="fa fa-trash" style={{ color: '#ff0000' }}></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Board>
        </main>
    )
}
