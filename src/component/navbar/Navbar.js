import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Tab, Tabs, useMediaQuery, useTheme, Button} from '@mui/material';
import Sidebar from './Sidebar';
import './Sidebar.css';


function Navbar() {
    const[navValue, setNavValue] = useState(0);

    //Scrolling Behaviour
    const[changeColor,setChangeColor] = useState(false)

    const scrollChangingColor = ()=>{
        if(window.scrollY >=80){
            setChangeColor(true)
        }else{
            setChangeColor(false)
        }
    }
    window.addEventListener('scroll',scrollChangingColor)

    //Responsive
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div >
        <AppBar className={changeColor ? 'appbar-active' : 'Appbar'}>
            <Toolbar elevation={5} sx={{display:'flex',justifyContent:'space-between',}}>
                <Typography sx={{fontSize:'20px !important'}}>Kutty Doctor</Typography>
                
                {isMatch ? <Sidebar /> : (
                    <>
                         <Tabs textColor='white'
                            value={navValue}
                            onChange={(e,value)=>{setNavValue(value)}} 
                            indicatorColor='secondary' 
                            sx={{marginLeft:'auto',}}
                        >
                            <Tab  label='Home' />
                            <Tab  label='About' />
                            <Tab  label='Service' />
                            <Tab  label='Contact us' />
                        </Tabs>

                    </>
                )}
               
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar

  

    // import {Drawer} from './Sidebar.js'