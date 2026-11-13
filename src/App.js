import logo from './logo.svg';
import './App.css';
import { Link,Navigate,useLocation,Routes,Route } from 'react-router-dom';
import Inicio from './Componentes/Inicio.tsx';
import Proyectos from './Componentes/Proyectos.tsx';
import Certificados from './Componentes/Certificados.tsx';
import { url } from './Funciones';
import linkedin from './img/linkedin.png'
import theme from './theme.js'
import { Button,Tabs,Tab } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import GhostFibers from './GhostFibers/GhostFibers.tsx';
function App() {
  const location=useLocation().pathname.replace('/','')
  const componentes=[<Inicio/>,<Proyectos/>,<Certificados/>]
  const enlaces=['Inicio','Proyectos','Certificados']
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GhostFibers
          glowColor="#b1b5ff"
          layers={3}
          twist={1.2}
          threads={72}
          fiberStyle="dots"
          depthOfField={0.85}
          hoverEffect="focus"
          intro={false}
          mouseInteraction
          lineColor="#dfd1fc"
          secondaryColor="#b1b5ff"
          gradient="depth"
          waves={1}
          volume={0.7}
          spread={1}
          scale={1}
          rotation={18}
          perspective={0.65}
          density={1}
          thickness={1}
          tips={0}
          foldGlow={1}
          speed={0.5}
          flow={0.4}
          rollSpeed={0.15}
          focusDepth={0}
          particles={0.5}
          sparkle={0.5}
          glow={0.8}
          brightness={1}
          vignette={0.3}
          grain={0.06}
          mouseStrength={1}
          pulseOnClick
          lightMode={false}
          style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      />
        <header>
          <h1 className='titulo'>LUCAS DIOGO ROSENDE</h1>
          <Tabs value={location} sx={{borderBottom:1,borderColor:'#757575'}} variant='scrollable' scrollButtons={'auto'} allowScrollButtonsMobile>
            {enlaces.map((x,i)=>(<Tab to={`/${i==0?'':url(x)}`} value={i==0?'':url(x)} component={Link} label={x.toUpperCase()}/>))}
          </Tabs>
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
    </ThemeProvider>
  );
}
export default App;
