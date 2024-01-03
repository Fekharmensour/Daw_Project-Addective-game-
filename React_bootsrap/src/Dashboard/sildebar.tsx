import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicationIcon from '@mui/icons-material/Medication';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsIcon from '@mui/icons-material/Settings';
import ThreePIcon from '@mui/icons-material/ThreeP';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom'
import AuthContext_Dashbord from '../context/AuthContext_Dashbord';
import Swal from 'sweetalert2';
import { FaUserMd } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    background: '#176B87',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    display:'flex',
    justifyContent:'space-between',
    boxShadow: 'none',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
         ...openedMixin(theme) ,
          background: '#176B87' ,
           boxShadow: 'none',
           display:'flex',
           justifyContent:'space-between',
          } ,
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme) ,
         background: '#176B87' ,
         display:'flex',
         justifyContent:'space-between',
          boxShadow: 'none',
         },
    }),
  }),
);

export default function SidBar() {
  const {logout_admin} = React.useContext(AuthContext_Dashbord);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const log_out = ()=>{
    console.log("hi .....");
    
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Exit The Dashbord Interface?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Exit it"
    }).then((result) => {
      if (result.isConfirmed) {
        logout_admin();
      }
    });
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      <Drawer variant="permanent" open={open} className='d-flex  justify-content-between ' >
        <div className="">
        <DrawerHeader onClick={()=>setOpen(!open)} className='draw_header d-flex justify-content-between align-items-center mb-5 ms-1'>
          <div className=' d-flex ms-2 align-items-center'>
            {open?null
            :<FormatListBulletedIcon className='title'/>}
          </div>
          <IconButton onClick={()=>setOpen(!open)} style={{color:'white'}}>
             {open?<CloseIcon/>:null}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='items '>
            <ListItem key={'Dashbord'} disablePadding sx={{ display: 'block' }} className='item' title={open? undefined!:'Static'}  onClick={()=>{navigate('/dashbord/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <DashboardIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'Dashbord'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'User'} disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Patient'}  onClick={()=>{navigate('/dashbord/patient')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <SmartToyIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'Patient'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key='Doctor' disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Doctor'}  onClick={()=>{navigate('/dashbord/doctor')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <FaUserMd  className='icon fs-4'/>
                </ListItemIcon>
                <ListItemText primary={'Doctor'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Quiz'} disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Quiz'} onClick={()=>{navigate('/dashbord/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <MdQuiz  className='icon fs-4'/>
                </ListItemIcon>
                <ListItemText primary={'Questions'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Review'} disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Review'} onClick={()=>{navigate('/dashbord/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <ThreePIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'Review'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List className='items '>
        <ListItem key={'Setting'} disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Setting'}  onClick={()=>{navigate('/dashbord/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <SettingsIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'Setting'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Profile'} disablePadding sx={{ display: 'block' }} className='item' title={open?undefined!:'Profile'}  onClick={()=>{navigate('/dashbord/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <AccountBoxIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'Profile'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        </div>
        <div className='mt-5 items'>
          <ListItem className='item mt-5' key={'Logout'} disablePadding sx={{ display: 'block' }} title={open?undefined!:'LogOut'}  onClick={()=>log_out()}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <MeetingRoomIcon className='icon'/>
                </ListItemIcon>
                <ListItemText primary={'LogOut'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </div>
      </Drawer>
      
    </Box>
  );
}