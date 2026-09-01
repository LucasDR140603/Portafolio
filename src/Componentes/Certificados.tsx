import Certificado1 from '../img/Certificado1.jpg'
import Certificado2 from '../img/Certificado2.jpg'
import { useState,useRef,useEffect } from 'react'
import Close from './Close.tsx'
export default function({}){
    const imagenes=[Certificado1,Certificado2]
    const [index,setIndex]=useState<number>(-1)
    const ventana=useRef<any>(null)
    useEffect(()=>{
        if (index!=-1){
            ventana.current.showModal()
        }
        else{
            ventana.current.close()
        }
    },[index])
    return (
        <>
            <h2>CERTIFICADOS</h2>
            <div className='certificados'>
                {imagenes.map((x,i)=>(<img key={i} src={x} title='Click para agrandar' onClick={()=>{setIndex(i)}}/>))}
            </div>
            <dialog ref={ventana} onClose={()=>{setIndex(-1)}}>
                <Close onClick={()=>{setIndex(-1)}}/>
                <div>
                    <img src={imagenes[index]}/>
                </div>
            </dialog>
        </>
    )
}