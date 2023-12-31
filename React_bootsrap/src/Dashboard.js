import React from 'react'
import SidBar from './Dashboard/sildebar.tsx'
import Box from '@mui/material/Box';
import {Outlet} from "react-router-dom";
import './Dashboard/dashbord.css'
const Dashboard = () => {
  return (
    <Box sx={{display:'flex'}} className=''>
      <SidBar className='sidebar'/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='bg-body-tertiary'>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Dashboard

