import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io"
import { FaCircleUser } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AuthContext_Dashbord from "../context/AuthContext_Dashbord";
import Swal from "sweetalert2";
import logo from './img/logo1.png'

const TopBar = () => {
  const [active_search , setActive_serach] = useState(false)
  const {user_admin , logout_admin} = useContext(AuthContext_Dashbord)

  const log_out = ()=>{ 
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Exit The Dashbord Interface?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#001C30",
      cancelButtonColor: "#64CCC5",
      confirmButtonText: "Exit it"
    }).then((result) => {
      if (result.isConfirmed) {
        logout_admin();
      }
    });
  }

  return (
    <div>
      <nav class="navbar p-0">
        <div class="container-fluid">
          <div className=" d-flex ">
            <img src={logo} width={30} className="me-2" />
            <div className="d-none d-sm-block">SnapOut</div>
          </div>
          <div className="icons d-flex align-items-center">
            <div className="searsh d-flex pe-2">
                <input className={active_search?'active':''} type="text" placeholder="Searshing For It" />
                <button className="icon " onClick={()=>setActive_serach(!active_search)}><IoIosSearch /></button>
            </div>
            <div className="notification pe-3">
                <IoIosNotificationsOutline/>
                <span>9</span>
            </div>
            <div className="user d-flex align-items-center">
                <div className="image me-2 "></div>
                <div className="nav-item dropdown d-none d-sm-block">
                <Link class="name nav-link dropdown-toggle p-0 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  { user_admin}
                </Link>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to=''>Profile</Link></li>
                    <li><Link class="dropdown-item" to=''>Settings</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li onClick={()=>log_out()}><Link class="dropdown-item" to=''> <MeetingRoomIcon className="me-2"/>LogOut </Link></li>
               </ul>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
