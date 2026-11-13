import { MdArrowLeft,MdArrowRight } from "react-icons/md";
import { useState,useEffect } from "react";
import {IconButton} from '@mui/material'
interface Props{
    fotos:string[]
}
type Foto={
    alto:number,
    ancho:number
}
export default function Carrusel({fotos}:Props){
    const [index,setIndex]=useState<number>(0)
    const anterior:number=index==0?fotos.length-1:index-1
    const posterior:number=index==fotos.length-1?0:index+1
    const [izquierda,setIzquierda]=useState<boolean>(false)
    const [derecha,setDerecha]=useState<boolean>(false)
    const duracion:number=500
    const [alto,setAlto]=useState<number>(0)
    const [ancho,setAncho]=useState<number>(0)
    useEffect(()=>{
        const cargarDimensiones=async()=>{
            const dimensiones:Foto[]=await Promise.all(
                fotos.map(src=>{
                    return new Promise<Foto>(resolve=>{
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
    const terminar=()=>{
        const set=izquierda?setIzquierda:setDerecha
        set(false)
    }
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
            <IconButton onClick={async()=>{setIzquierda(true)}} disabled={izquierda || derecha}><MdArrowLeft size={'7vmin'}/></IconButton>
            <div style={{maxWidth:'100%',overflow:'hidden',position:'relative',width:`${ancho}px`,aspectRatio:`${ancho}/${alto}`}}>
                <img alt='' key={index} src={fotos[index]} style={{maxWidth:'100%',maxHeight:'100%',position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',animation:`${(izquierda || derecha)?'centro-'+(izquierda?'derecha':'izquierda'):''} ${duracion}ms forwards`}}/>
                {(izquierda || derecha) &&
                <img alt='' key={izquierda ? anterior : posterior} src={fotos[izquierda?anterior:posterior]} style={{maxWidth:'100%',maxHeight:'100%',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',animation:`${izquierda?'izquierda':'derecha'}-centro ${duracion}ms forwards`}} onAnimationEnd={terminar}/>
                }
            </div>
            <IconButton onClick={async()=>{setDerecha(true)}} disabled={izquierda || derecha}><MdArrowRight size={'7vmin'}/></IconButton>
        </div>
    )
}