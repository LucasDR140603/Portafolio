import {IoMdCloseCircle} from 'react-icons/io'
interface Props{
    onClick:React.MouseEventHandler<SVGElement>,
    absolute?:boolean,
    color?:string
}
export default function Close({onClick,absolute=false,color='azure'}:Props){
    return <IoMdCloseCircle color={color} cursor={'pointer'} size={25} onClick={onClick} style={absolute?{position:'absolute',right:'0'}:{}}/>
}