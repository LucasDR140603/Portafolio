import web from '../img/CapturaWEB.jpg'
import appweb from '../img/CapturaAPPWEB.jpg'
import streamlit from '../img/Streamlit.jpg'
import mobil from '../img/CapturaAPP.jpg'
import api from '../img/CapturaAPI.jpg'
import Proyecto from './Proyecto'
import { Link } from 'react-router-dom'
export default function({}){
    return (
        <>
            <h2>PROYECTOS</h2>
            <div className="proyectos">
                <Proyecto img={web} title={"Página Web"} text={"Hecha con <b>React</b> para la empresa <a href='https://www.asinova.es/' className='aqua'>ASINOVA SOLUTIONS S.L</a>.<p><a href='https://github.com/LucasDR140603/Asinova' className='aqua'>Repositorio de Github</a></p>"}/>
                <Proyecto img={appweb} title={"Aplicación Web"} text={"Proyecto de <b>React</b> en el que el usuario puede hacer registros de proyectos determinados. Esto permite hacer un excel a partir de una tabla en la que se ven las duraciones de cada registro.<p><a href='https://github.com/LucasDR140603/GRP' className='aqua'>Repositorio de Github</a></p>"}/>
                <Proyecto img={streamlit} title={"IA"} text={"Proyecto hecho con <b>Streamlit</b> para el frontend y <b>FastAPI</b> para el backend, que consiste en: <ul><li>Modelo de IA de <b>regresión lineal</b> que predice el precio de una vivienda en la comunidad de Madrid en base a unos parámetros</li><li>Chatbot que usa un modelo <b>langchain de Gemini</b> que analiza los datos de anuncios almacenados en una base de datos de pgAdmin para responder preguntas sobre las viviendas de Madrid.</li></ul><p><a href='https://github.com/LucasDR140603/Proyecto-Pisos' className='aqua'>Repositorio del Frontend</a></p><p><a href='https://github.com/LucasDR140603/BackendProyectoPisos' className='aqua'>Repositorio del Backend</a></p>"}/>
                <Proyecto img={mobil} title={"Aplicación Móbil"} text={"Hecha con <b>Flutter</b> y funciona de forma similar a la aplicación Web pero para dispositivos móbiles.<p><a href='https://github.com/LucasDR140603/GRPMobile' className='aqua'>Repositorio de Github</a></p>"}/>
                <Proyecto img={api} title={"Webapi"} text={"Api hecha con <b>NodeJS</b> que comunica la base de datos del servidor remoto de la empresa (hecha con <b>PostgreSQL</b>) con las 2 aplicaciones anteriores.<p><a href='https://github.com/LucasDR140603/Backend' className='aqua'>Repositorio de Github</a></p>"}/>
            </div>
        </>
    )
}