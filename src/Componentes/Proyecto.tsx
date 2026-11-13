import HTMLReactParser from "html-react-parser/lib/index"
interface Props{
    img:string,
    title:string,
    text:string
}
export default function Proyecto({img,title,text}:Props){
    const parse=HTMLReactParser
    return (
        <div className="proyecto">
            <div style={{backgroundColor:'#121212'}}>
                <img src={img} alt={''}/>
            </div>
            <div style={{padding:'0 1rem'}}>
                <h3 style={{color:'yellow'}}>{title.toUpperCase()}</h3>
                <p style={{width:'min-content',minWidth:'100%',marginTop:0,fontSize:'0.85rem'}}>{parse(text)}</p>
            </div>
        </div>
    )
}