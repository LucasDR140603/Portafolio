import { MdArrowLeft,MdArrowRight } from "react-icons/md";
import { useState,useEffect } from "react";
export default function({fotos}){
    const [index,setIndex]=useState(0)
    const anterior=index==0?fotos.length-1:index-1
    const posterior=index==fotos.length-1?0:index+1
    const delay=(milliseconds)=>new Promise(resolve=>setTimeout(resolve,milliseconds))
    const [izquierda,setIzquierda]=useState(false)
    const [derecha,setDerecha]=useState(false)
    const duracion=500
    const [alto,setAlto]=useState(0)
    const [ancho,setAncho]=useState(0)
    useEffect(()=>{
        const cargarDimensiones=async()=>{
            const dimensiones=await Promise.all(
                fotos.map(src=>{
                    return new Promise(resolve=>{
                        const img=new Image()
                        img.onload=()=>resolve({alto:img.height,ancho:img.width})
                        img.src=src
                    })
                })
            )
            setAlto(Math.max(...dimensiones.map((x)=>x.alto)))
            setAncho(Math.max(...dimensiones.map((x)=>x.ancho)))
        }
        cargarDimensiones()
    },[fotos])
    useEffect(()=>{
        if (!izquierda && alto>0 && ancho>0){
            setIndex(anterior);
        }
    },[izquierda])
    useEffect(()=>{
        if (!derecha && alto>0 && ancho>0){
            setIndex(posterior);
        }
    },[derecha])
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
            <a className="btn" onClick={async()=>{setIzquierda(true);await delay(duracion-25);setIzquierda(false);}}><MdArrowLeft size={'7vmin'}/></a>
            <div style={{maxWidth:'100%',overflow:'hidden',position:'relative',width:`${ancho}px`,aspectRatio:`${ancho}/${alto}`}}>
                <img src={fotos[index]} style={{maxWidth:'100%',maxHeight:'100%',position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',animation:`${(izquierda || derecha)?'centro-'+(izquierda?'derecha':'izquierda'):''} ${duracion}ms forwards`}}/>
                {izquierda || derecha?
                <img src={fotos[izquierda?anterior:posterior]} style={{maxWidth:'100%',maxHeight:'100%',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',animation:`${izquierda?'izquierda':'derecha'}-centro ${duracion}ms`}}/>
                :null}
            </div>
            <a className="btn" onClick={async()=>{setDerecha(true);await delay(duracion-25);setDerecha(false);}}><MdArrowRight size={'7vmin'}/></a>
        </div>
    )
}