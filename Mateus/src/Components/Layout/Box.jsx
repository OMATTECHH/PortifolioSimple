import React from 'react'
import { Link } from "react-router-dom";

const Box = () => {
    return (
        <>
            <main className='box'>
                
                <div className='flex justify-between'>
                    <div className='ml-10 mt-5'>
                        <h3 className='text-white hover:scale-105 transition-all duration-200'><strong>Mateus</strong></h3>
                        <p className='text-white text-xs text-center'>developer</p>
                    </div>

                    <div className='mt-5 mr-10'>
                        <p className='text-white font-bold uppercase text-sm hover:scale-105 transition-all duration-200'>let´s create</p>
                    </div>
                </div>

                    <h1 className='text-white font-extrabold uppercase text-7xl mt-25 ml-15 w-52 hover:scale-105 transition-all duration-200'>Hello, I´m a Developer</h1>

                    <div className='ml-15 mt-4'>
                        <p className='text-white font-extralight hover:scale-105 transition-all duration-200'>I'm Mateus, a developer from Brazil.</p>
                    </div>

                    <div className='flex justify-center mt-20'>
                        <div>
                            <Link className='btn hover:scale-105 transition-all duration-200' to="/apresentacao">Apresentação</Link>
                        </div>
                    </div>
            </main>
        </>
    )
}

export default Box
