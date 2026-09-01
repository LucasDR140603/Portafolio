import {IoMdCloseCircle} from 'react-icons/io'
export default function({onClick,absolute=false,color='azure'}){
    return <IoMdCloseCircle color={color} cursor={'pointer'} size={25} onClick={onClick} style={absolute?{position:'absolute',right:'0'}:{}}/>
}