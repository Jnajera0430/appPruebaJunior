import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SyntheticEvent, useState } from 'react';
import { Box } from '@mui/material';

export default function Navigation() {
    const [value, setValue] = useState('home');    
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box  sx={{ width: '90vw', height: '10vh', display:'flex', justifyContent: 'space-between' }}>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="Chat"
                    value="chat"
                    icon={<ChatIcon />}
                    />
            </BottomNavigation>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Logout"
                    value="logout"
                    icon={<LogoutIcon />}
                />
            </BottomNavigation>
        </Box>

    );
}