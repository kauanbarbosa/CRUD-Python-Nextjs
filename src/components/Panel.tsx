import Link from 'next/link'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

interface PanelProps {
    name?: any
    href: string
    children?: any
    exit?: any
}

export default function Board(props: PanelProps) {
    return (
        <div
            className='grid bg-white rounded-lg mt-12 drop-shadow-lg h-auto py-4 w-5/6 grid-cols-12 justify-items-center'>
            {props.name ? (
                <>
                    <h1 className='mt-3 text-3xl text-gray-600 drop-shadow-md text-center col-span-11'>{props.name}</h1>
                    {props.exit ? (
                        <Link href={props.href} onClick={() => sessionStorage.removeItem("login")} className="mt-3 ml-9 w-min text-center col-span-1"><i className="fa fa-sign-out fa-lg fa-orange" style={{ color: 'tomato' }} aria-hidden='true' /></Link>
                    ) : (

                        <Link href={props.href} className="mt-3 ml-9 w-min text-center col-span-1"><i className="fa fa-sign-out fa-lg fa-orange" style={{ color: 'tomato' }} aria-hidden='true' /></Link>
                    )}
                    {props.children}
                </>
            ) : (
                <>
                    {props.exit ? (
                        <Link href={props.href} onClick={() => sessionStorage.removeItem("login")} className="mt-3 ml-9 w-min text-center col-span-1"><i className="fa fa-sign-out fa-lg fa-orange" style={{ color: 'tomato' }} aria-hidden='true' /></Link>
                    ) : (

                        <Link href={props.href} className="mt-3 ml-9 w-min text-center col-span-1"><i className="fa fa-sign-out fa-lg fa-orange" style={{ color: 'tomato' }} aria-hidden='true' /></Link>
                    )}
                    {props.children}
                </>
            )}
        </div >
    )
}