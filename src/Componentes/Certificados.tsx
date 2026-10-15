import Certificado1 from '../img/Certificado1.jpg'
import Certificado2 from '../img/Certificado2.jpg'
import { useState,useRef,useEffect } from 'react'
import {Dialog,DialogTitle,DialogContent,IconButton} from '@mui/material'
import {Document,Page,pdfjs} from 'react-pdf'
import CloseIcon from '@mui/icons-material/Close'
import Close from './Close.tsx'
import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch'
pdfjs.GlobalWorkerOptions.workerSrc = `//://unpkg.com{pdfjs.version}/build/pdf.worker.min.mjs`
export default function({}){
    const imagenes=[Certificado1,Certificado2]
    const [index,setIndex]=useState<number>(-1)
    // const ventana=useRef<any>(null)
    useEffect(()=>{
        if (index!=-1){
            // ventana.current.showModal()
        }
        else{
            // ventana.current.close()
        }
    },[index])
    return (
        <>
            <h2>CERTIFICADOS</h2>
            <div className='certificados'>
                {imagenes.map((x,i)=>(<img key={i} src={x} title='Click para agrandar' onClick={()=>{setIndex(i)}}/>))}
                <iframe src='https://drive.google.com/file/d/13cABsqSUjoG90neb_Oxk-2hb6vKSwCvV/preview?usp=sharing' style={{flex:1,height:'100%',maxHeight:'65vh',width:'auto'}}></iframe>
            </div>
            {/* <dialog ref={ventana} onClose={()=>{setIndex(-1)}}>
                <Close onClick={()=>{setIndex(-1)}}/>
                <div>
                    <img src={imagenes[index]}/>
                </div>
            </dialog> */}
            {index!=-1?<Dialog open={index!=-1} onClose={()=>{setIndex(-1)}} maxWidth='md'>
                {/* <DialogTitle sx={{display:'flex',justifyContent:'end'}}>
                    <IconButton onClick={()=>{setIndex(-1)}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle> */}
                <DialogContent>
                    <img src={imagenes[index]} style={{width:'100%', height: 'auto'}}/>
                </DialogContent>
            </Dialog>:null}
        </>
    )
}