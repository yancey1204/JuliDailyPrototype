import * as React from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import {useState} from 'react'

export const Navigation = ()=> {
    const [value, setValue] = useState(0); // State for the bottom menu
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Backdrop open={open} />
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ position: 'absolute', bottom: 0, left:0, width: '100%', boxShadow: 4 // Add the boxShadow property
                }}
            >
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                sx={{
                    '&.Mui-selected': {  // Style for the selected button
                        color: 'primary.main' // Use MUI theme color
                    }
                }}/>
                <div style={{ position: 'relative', flexGrow: 1 }}>
                    <SpeedDial
                        sx={{flexDirection: 'column'}}
                        ariaLabel="Add Options"
                        icon={<SpeedDialIcon icon={<AddCircleIcon />} />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                        direction={'left'}
                        >
                            
                        <SpeedDialAction
                            sx={{width: '56px', height: '56px'}}
                            icon={<FileCopyIcon />}
                            tooltipTitle="Record"
                            onClick={() => { 
                                handleClose();  // Close the SpeedDial 
                                navigate('/record/create'); // Redirect
                            }} 
                        />
                        <SpeedDialAction
                            sx={{width: '56px', height: '56px'}}
                            icon={<SaveIcon />}
                            tooltipTitle="Post"
                            onClick={() => { 
                                handleClose(); 
                                navigate('/post/create');
                            }} 
                        />
                
                    </SpeedDial>
            </div>
            <BottomNavigationAction label="Me" icon={<PersonIcon />} />
        </BottomNavigation>
    </Box>
    )
}