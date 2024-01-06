import React, { useState , useEffect} from "react";
import TopBar from "../TopBar";
import "../Doctor/doctor.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Data_Doctors } from "../Doctor/data_doctor";
// import {data} from '../User/Data_user'
import "../User/patients.css";
import { FaUserPlus } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Doctor_Form from "../Doctor/Doctor_Form";

const array = [
  "https://th.bing.com/th/id/R.25b2cb21469ef15b3225256614c5121f?rik=snUZ0az2XQiVVA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.d5ejVLmflltPRNzw6vy6mQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.f0573cd68b4796cec08e9bc4c3efa285?rik=7p%2f3t3iMc0JmPQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.dGOhIMyqd2AAfWWYZShVGwAAAA?rs=1&pid=ImgDetMain",
];

function Star(rating) {
  const Render_Start = () => {
    let co = 0;
    let Stars = [];
    const nbr1 = Math.floor(rating);
    for (let i = 0; i < nbr1; i++) {
      Stars.push(
        <span style={{ color: "gold" }}>
          <FaStar className="me-2" />
        </span>
      );
      co++;
    }
    for (let i = co; i < 5; i++) {
      Stars.push(
        <span style={{ color: "#ccc" }}>
          <FaStar className="me-2" />
        </span>
      );
    }

    return Stars;
  };
  return <div>{Render_Start()}</div>;
}

const Doctor = () => {
  const [search, setSearch] = useState("");
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  // const [Data_Doctors , setData_Doctors] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resolvedData = await data;
  //       const filteredData = resolvedData.filter((e) => e.is_staff);
  //       setData_Doctors(filteredData.sort((a, b) =>
  //         a.username.localeCompare(b.username)
  //       ));
  //       console.log(Data_Doctors);
  //     } catch (error) {
  //       console.error('Error fetching and filtering user data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  
  const handleShowUserForm = (doctor) => {
    setSelectedUser(doctor)
    setShowUserForm(true);
  };

  const handleHideUserForm = () => {
    setShowUserForm(false);
    setSelectedUser(null);
  };

  const handleSaveUser = (userData) => {  
    handleHideUserForm();
  };

  function Delete_doc(username) {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to Delete - Dr.${username} -`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#001C30",
      cancelButtonColor: "#64CCC5",
      confirmButtonText: "Delete it",
    }).then((result) => {});
  }

  return (
    <div>
      <TopBar />
      <div className="p-3">
        <Form className="d-flex mb-3 justify-content-center align-items-center">
          <InputGroup className="my-3 " style={{ width: "400px" }}>
            {/* onChange for search */}
            <Form.Control
              className="p-3 "
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
          <Button className="d-flex align-items-center new_doctors p-3 rounded-2 ms-2" onClick={()=> handleShowUserForm(null)}>
            <FaUserPlus className="fs-4" />
          </Button>
        </Form>
        <div className="row gap-4 d-flex justify-content-center">
          {Data_Doctors.
          filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.username.toLowerCase().includes(search);
          }).map((e, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 card " style={{minWidth:'280px'}}>
              <img src={array[i % 4]} className="card-img-top mb-1" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> Dr. {e.username}</h5>
                <p className="card-text text-black-50 text-uppercase m-0">
                  - Geniralist -
                </p>
                <p className="nbr_patient fs-4 "> {Star(e.rating)} </p>
                <div className="btnss d-flex d-flex justify-content-around mt-3">
                  <span
                    className="btn-delete"
                    onClick={() => Delete_doc(e.username)}
                  >
                    {" "}
                    Delete{" "}
                  </span>
                  <span className="btn-info " onClick={() => handleShowUserForm(e)}> info </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Doctor_Form
        show={showUserForm}
        handleClose={handleHideUserForm}
        onSave={handleSaveUser}
        user={selectedUser}
      />
    </div>
  );
};

export default Doctor;
