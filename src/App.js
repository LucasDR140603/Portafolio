import logo from './logo.svg';
import './App.css';
import { Link,Navigate,useLocation,Routes,Route } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Proyectos from './Componentes/Proyectos';
import Certificados from './Componentes/Certificados.tsx';
import { url } from './Funciones';
import linkedin from './img/linkedin.png'
function App() {
  const location=useLocation().pathname.replace('/','')
  const componentes=[<Inicio/>,<Proyectos/>,<Certificados/>]
  const enlaces=['Inicio','Proyectos','Certificados']
  return (
    <div className="App">
      <header>
        <h1 className='titulo'>LUCAS DIOGO ROSENDE</h1>
        <div className='enlaces'>
          {enlaces.map((x,i)=>(<Link to={`/${url(x)}`} className={location.includes(url(x)) || (i==0 && location=='')?'marcado':''}>{x.toUpperCase()}</Link>))}
        </div>
      </header>
      <main>
        <div style={{margin:'0 auto',height:'100%',display:'flex',flexDirection:'column'}}>
          <Routes>
            {enlaces.map((x,i)=>(<Route path={`/${url(x)}`} element={i==0?<Navigate to={'/'}/>:componentes[i]}/>))}
            <Route path={'/'} element={componentes[0]}/>
          </Routes>
        </div>
      </main>
      <footer>
        <a href='https://www.linkedin.com/in/lucas-diogo-rosende-15697937b/' className='aqua'><img src={linkedin}/>Linkedin</a>
      </footer>
    </div>
  );
}
export default App;
