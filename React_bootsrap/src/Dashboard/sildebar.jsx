import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaUser, FaChartBar } from 'react-icons/fa';

const Slide_Bar = () => {
  return (
    <div>
      <Sidebar style={{height:"100vh"}} className='d-flex flex-column justify-content-center fs-4'>
      <Menu iconShape="square">
        <MenuItem icon={<FaHome />}>Home</MenuItem>
        <SubMenu title="User" icon={<FaUser />}>
          <MenuItem>User Profile</MenuItem>
          <MenuItem>User Settings</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaChartBar />}>Charts</MenuItem>
        </Menu>
      </Sidebar> 
    </div>
  )
}

export default Slide_Bar
