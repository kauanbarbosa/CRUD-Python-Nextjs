import React from 'react'

interface TitleProps{
    title: string
    className?: any
}

export default function Title(props: TitleProps) {
    return(
        <div>
            <h1 className={`
            text-white 
            text-4xl 
            text-center
            md:text-5xl 
            mt-6
            drop-shadow-lg
            `}>
                {props.title}
            </h1>
        </div>
    )
}