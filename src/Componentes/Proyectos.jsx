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
                <Proyecto img={web} title={"Página Web"} text={"Hecha con React para la empresa <a href='https://www.asinova.es/' className='aqua'>ASINOVA SOLUTIONS S.L</a>."}/>
                <Proyecto img={appweb} title={"Aplicación Web"} text={"Proyecto de React en el que el usuario puede hacer registros de proyectos determinados. Esto permite hacer un excel a partir de una tabla en la que se ven las duraciones de cada registro."}/>
                <Proyecto img={streamlit} title={"IA"} text={"Proyecto hecho con Streamlit para el frontend y FastAPI para el backend, que consiste en: Por un lado, un modelo de IA de regresión lineal que predice el precio de una vivienda en la comunidad de Madrid en base a unos parámetros; Y por otro: un chatbot que usa un modelo de Gemini que analiza los datos de anuncios almacenados en una base de datos de pgAdmin para responder preguntas sobre las viviendas de Madrid"}/>
                <Proyecto img={mobil} title={"Aplicación Móbil"} text={"Hecha con Flutter y funciona de forma similar a la aplicación Web pero para dispositivos móbiles."}/>
                <Proyecto img={api} title={"Webapi"} text={"Api hecha con NodeJS que comunica la base de datos del servidor remoto de la empresa (hecha con SQL Server) con las 2 aplicaciones anteriores."}/>
            </div>
        </>
    )
}