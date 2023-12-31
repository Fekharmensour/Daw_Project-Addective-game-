import React from "react";
import TopBar from "../TopBar";
import Grid from "@mui/material/Grid"; // Grid version 1
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { Chart } from "react-google-charts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsightsIcon from "@mui/icons-material/Insights";
import Col from "react-bootstrap/Col";
import {
  chartOptions,
  data_Gei,
  data_Pei,
  data_area,
  data_bar,
  formatters,
  formatters_Doctor,
  options_Gei,
  options_Pei,
  options_area,
  options_bar,
  topDoctorsData,
} from "../char_data";

const Static = () => {
  return (
    <div>
      <TopBar />
      <div className="mt-4 static">
        <Row className="gap-md-4 gap-sm-1  d-flex justify-content-center ">
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="box shadow p-3 mb-5 bg-white rounded-4 "
          >
            <div className=" d-flex align-items-center justify-content-evenly p-2">
              <PeopleAltIcon className="fs-2 icon" />
              <div>
                <h5 className="text-uppercase fs-5 mb-0  p-1">Patient</h5>
                <h6 className="fs-6 p-1 text-black-50">+999</h6>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="box shadow p-3 mb-5 bg-white rounded-4 "
          >
            <div className=" d-flex align-items-center justify-content-evenly p-2">
              <ManageAccountsIcon className="fs-2 icon" />
              <div>
                <h5 className="text-uppercase fs-5 mb-0  p-1">Doctors</h5>
                <h6 className="fs-6 p-1 text-black-50">+999</h6>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="active box shadow p-3 mb-5 bg-body-tertiary rounded-4 mb-0"
          >
            <div className=" d-flex align-items-center justify-content-evenly p-2">
              <InsightsIcon className="icon fs-2 text-white" />
              <div>
                <h5 className="text-uppercase fs-5 mb-0  p-1 text-white">
                  Active
                </h5>
                <h6 className="fs-6 p-1 text-white"> 87 of 999 </h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gap-3 d-flex justify-content-center mb-4">
          <Col
            xs={12}
            sm={9}
            md={7}
            lg={7}
            className=" p-3 shadow rounded-2 bg-white"
          >
            <h6>Our Website Statistics</h6>
            <h6 className="text-black-50 mb-2">
              Patients _ Addicted : last three years
            </h6>
            <Chart
              chartType="Bar"
              width="100%"
              height="250px"
              data={data_bar}
              options={options_bar}
            />
          </Col>
          <Col
            xs={12}
            sm={5}
            md={4}
            lg={4}
            className="p-3 shadow rounded-2 bg-white"
          >
            <h6>Age Distribution of Addicted Patients</h6>
            <h6 className="text-black-50">kids , Young's, Old</h6>
            <Chart
              chartType="PieChart"
              data={data_Pei}
              options={options_Pei}
              width={"100%"}
              height={"250px"}
            />
          </Col>
        </Row>
        <Row className="gap-md-4 gap-sm-1  d-flex justify-content-center ">
          <Col
            xs={12}
            sm={9}
            md={5}
            lg={4}
            className=" p-3 ps-5 shadow rounded-2 bg-white  "
          >
            <h6 className="">Ranking Of Our Top Doctors</h6>
            <Chart
              className="ms-3 mt-1"
              width={"100%"}
              height={"200px"}
              chartType="Table"
              data={topDoctorsData}
              options={chartOptions}
            />
          </Col>
          <Col
            xs={12}
            sm={9}
            md={5}
            lg={4}
            className=" p-3 shadow rounded-2 bg-white"
          >
            <h6>The Position Of Our Users In the World</h6>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data_Gei[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="100%"
              height="200px"
              data={data_Gei}
              options={options_Gei}
            />
          </Col>
          <Col
            xs={12}
            sm={9}
            md={5}
            lg={3}
            className=" p-3 shadow rounded-2 bg-white"
          >
            <h6>Our User Types In Three Years</h6>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="200px"
              data={data_area}
              options={options_area}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Static;
