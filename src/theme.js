import {createTheme} from '@mui/material/styles'
const theme=createTheme({
    palette:{
        mode:'dark'
    },
    components:{
        MuiDialog:{
            styleOverrides:{
                paper:{
                    border:'1px solid #7b8181',
                    backgroundImage: 'none',
                    backgroundColor:'#0f131d',
                }
            }
        },
        MuiMenu:{

        }
    }
})
export default theme;