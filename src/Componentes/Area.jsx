import HTMLReactParser from "html-react-parser/lib/index"
export default function({icon=null,title,img,text}){
    const parse=HTMLReactParser
    return <div className="area">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}>{icon}<h3 style={{marginInline:0}}>{title}</h3></div>
        <img src={img}/>
        <p>{parse(text)}</p>
    </div>
}