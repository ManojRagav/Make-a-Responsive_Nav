import React, {useState} from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import './Sidebar.css';

function Sidebar() {
    const[openDrawer, setOpenDrawer] = useState(false)
    
  return (
    <div>
        <Drawer 
        anchor='left'
        open={openDrawer}
        style={{width:'600px'}}
        >
            <List>
                <ListItemButton className='closeIcons' sx={{marginLeft:'70%'}}>
                    <ListItemIcon onClick={()=>{setOpenDrawer(false)}}>
                        <CloseIcon  />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                        <ListItemText>Home</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon />
                        <ListItemText>About</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                        <ListItemText>Service</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <ContactPageIcon />
                        <ListItemText>Contact</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                  
            </List>
        </Drawer>
        <div >
            <IconButton  onClick={()=>{setOpenDrawer(!openDrawer)}} >
                <MenuIcon className='menubutton' />
            </IconButton>
        </div>
    </div>
  )
}

export default Sidebar;