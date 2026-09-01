import perfil from '../img/Perfil.jpg'
import Area from './Area'
import react from '../logo.svg'
import flutter from '../flutter-svgrepo-com.svg'
import node from '../node-svgrepo-com.svg'
import { TbWorldWww } from "react-icons/tb"
import { ImMobile } from "react-icons/im"
import { IoIosSettings } from "react-icons/io"
import Carrusel from './Carrusel'
import web from '../img/CapturaWEB.jpg'
import appweb from '../img/CapturaAPPWEB.jpg'
import streamlit from '../img/Streamlit.jpg'
import mobil from '../img/CapturaAPP.jpg'
import api from '../img/CapturaAPI.jpg'
export default function({}){
    return (
        <>
            <br/>
            <img src={perfil} className='perfil'/>
            <h2>DESARROLLADOR FULLSTACK</h2>
            <p style={{margin:0,textAlign:'center'}}>Experiencia en desarrollo de:</p>
            <div className="areas">
                <h2>FRONTEND</h2>
                <Area icon={<TbWorldWww/>} title={'WEB'} img={react} text={'React, Streamlit y ASP.NET Core'}/>
                <Area icon={<ImMobile/>} title={'MÓBIL'} img={flutter} text={'Flutter y Android Studio'}/>
                <h2>BACKEND</h2>
                <Area icon={<IoIosSettings/>} title={'WEBAPI'} img={node} text={'NodeJS, FastAPI y C#'}/>
            </div>
            <br/>
            <hr/>
            <br/>
            <Carrusel fotos={[web,appweb,streamlit,mobil,api]}/>
        </>
    )
}