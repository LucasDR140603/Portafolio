import perfil from '../img/Perfil.jpg'
import Area from './Area.tsx'
import react from '../logo.svg'
import flutter from '../flutter-svgrepo-com.svg'
import node from '../node-svgrepo-com.svg'
import { TbWorldWww } from "react-icons/tb"
import { ImMobile } from "react-icons/im"
import { IoIosSettings } from "react-icons/io"
import Carrusel from './Carrusel.tsx'
import web from '../img/CapturaWEB.png'
import appweb from '../img/CapturaAPPWEB.jpg'
import streamlit from '../img/Streamlit.jpg'
import consultoria from '../img/ConsultorIA.png'
import mobil from '../img/CapturaAPP.jpg'
import api from '../img/CapturaAPI.jpg'
import ShinyText from '../ShinyText/ShinyText.tsx'
export default function Inicio(){
    return (
        <>
            <br/>
            <img src={perfil} className='perfil' alt={''}/>
            <ShinyText
                text="DESARROLLADOR FULLSTACK"
                color="#c5f739"
                shineColor="#d5ff03"
                speed={1.4}
                shineWidth={40}
                softness={0.5}
                trigger="loop"
                delay={0}
                angle={103}
                bands={1}
                glow={1}
                direction="left"
                easing="smooth"
                yoyo
                followPointer={false}
                pauseOnHover={false}
                disabled={false}
                />
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
            <Carrusel fotos={[web,appweb,streamlit,consultoria,mobil,api]}/>
        </>
    )
}