import HTMLReactParser from "html-react-parser/lib/index"
import { ReactNode } from "react"
import StarBorder from "../StarBorder/StarBorder.tsx"
interface Props{
    icon?:ReactNode,
    title:string,
    img:string,
    text:string,
}
export default function Area({icon=null,title,img,text}:Props){
    const parse=HTMLReactParser
    return <div className='area'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}>{icon}<h3 style={{marginInline:0}}>{title}</h3></div>
        <img src={img} alt={''}/>
        <p>{parse(text)}</p>
    </div>
}