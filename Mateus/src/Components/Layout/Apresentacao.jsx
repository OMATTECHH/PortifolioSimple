import React from 'react'
import { Link } from "react-router-dom";
import {useAutoHideHeader}  from "../../Hooks/useAutoHideHeader.jsx";


const Apresentacao = () => {

    const {visible} = useAutoHideHeader(300);

    return (
        <>

        <h1 className='text-white font-extrabold uppercase absolute top-0 left-0 z-2 text-4xl ml-20 mt-3 title hover:scale-105 transition-all duration-200'>
            <Link to="/">Mateus</Link>
        </h1>
        
        <header className={`
        header
        fixed top-0 right-0 z-[99]
        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}
        `}>

                <nav className='ml-10'>
                    <ul className='flex gap-20'>
                        <li className='text-black font-extrabold uppercase hover:scale-105 transition-all duration-200'>
                            <a href="#sobre" rel="noopener noreferrer">About me</a>
                        </li>
                        <li className='text-black font-extrabold uppercase hover:scale-105 transition-all duration-200'>
                            <a href="#projetos"rel="noopener noreferrer">Projects</a>
                        </li>

                        <li className='text-black font-extrabold uppercase hover:scale-105 transition-all duration-200'>
                            <a href="#info"rel="noopener noreferrer">Information</a>
                        </li>

                        <li className='text-black font-extrabold uppercase hover:scale-105 transition-all duration-200'>
                            <a href="#"rel="noopener noreferrer">Home</a>
                        </li>
                    </ul>
                </nav>

        </header>

        <div className='box-2'>
            <h2 className="font-extrabold text-6xl uppercase text-center my-10 text-white hover:scale-105 transition-all duration-200" id='sobre'>
                Apresentação
            </h2>

            <p className=" text-center text-lg text-white ">
                Tudo começou quando eu tinha <span className="highlight">14 anos</span>. Naquela época, eu não fazia ideia de que
                estava dando os primeiros passos em algo que mudaria completamente o meu futuro. Comecei por curiosidade, mexendo
                em códigos, quebrando coisas, tentando entender <span className="highlight">como a internet e os jogos funcionavam por dentro</span>.
                <br /><br />
                No início era só diversão — ver algo aparecer na tela porque eu escrevi algumas linhas de código parecia
                <span className="highlight"> magia</span>. Mas essa “magia” virou interesse, o interesse virou estudo, e o estudo
                virou <span className="highlight">paixão</span>.
                <br /><br />
                Com o tempo, fui percebendo que programar não era só sobre escrever código, mas sobre
                <span className="highlight"> resolver problemas, criar experiências e transformar ideias em coisas reais</span>.
                Hoje, sigo explorando esse universo como desenvolvedor fullstack, sempre buscando unir
                <span className="highlight"> lógica, criatividade e design</span> em cada projeto que construo.
                <br /><br />
                O que começou como curiosidade aos 14 anos virou o que eu quero fazer pelo resto da vida.
            </p>
        </div>

        
            <div className='box-3 h-80 p-7'>

                <h2 className="font-extrabold text-6xl uppercase text-center mt-3 text-white hover:scale-105 transition-all duration-200" id='projetos'>
                    Projetos Principais
                </h2>

                <ul className='flex gap-10 justify-between font-extrabold uppercase mt-17 text-white'>
                    <li className='hover:scale-105 transition-all duration-200'><a href="https://omattechh.github.io/iPhone-17/" target="_blank" rel="noopener noreferrer"  className='bg-neutral-600 p-5 rounded-2xl '>iPhone 17</a></li>
                    <li className='hover:scale-105 transition-all duration-200'><a href="https://omattechh.github.io/MercadoClone/" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 rounded-2xl p-5'>Mercado Livre</a></li>
                    <li className='hover:scale-105 transition-all duration-200'><a href="https://omattechh.github.io/DarkSmash/" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 p-5 rounded-2xl '>Dark Smash</a></li>
                    <li className='hover:scale-105 transition-all duration-200'><a href="https://omattechh.github.io/Snakegame/" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 p-5 rounded-2xl'>SnakeBar</a></li>
                    <li className='hover:scale-105 transition-all duration-200'><a href="https://omattechh.github.io/Project-Soude/" target="_blank" rel="noopener noreferrer" className='bg-neutral-600 p-5 rounded-2xl'>Soude</a></li>
                </ul>
            </div>

        <footer className='box-4 flex justify-between items-center  text-sm' id='info'>
                    <p className='text-center text-white hover:scale-105 transition-all duration-200  '>Desenvolvido por Mateus</p>
                    <p className='text-center text-white hover:scale-105 transition-all duration-200 '>© Todos os direitos reservados</p>
                    <p className='text-center text-white hover:scale-105 transition-all duration-200 '>@2026</p>
                    <p className='text-center text-white hover:scale-105 transition-all duration-200 '><a href="https://www.instagram.com/mattechh.dev/" target='_blank'  rel="noopener noreferrer" >@mattech.dev</a></p>
        </footer>


        </>
    )
}

export default Apresentacao
