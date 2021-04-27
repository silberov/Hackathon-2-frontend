import styled from "styled-components";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import Accordion from "../components/Accordion/accoridion";
import React, { useState, useEffect } from "react";

const PeopleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  width: 20%;
  float: left;
`;

const RightSide = styled.div`
  width: 80%;
  float: right;
`;


function Results(props) {

  const [employeesInfo, setEmployeesInfo] = useState({});
  const [selectedEmployeeInfo, setSelectedEmployeeInfo] = useState({});
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(1)
//Math.floor(Math.random() * (employeesInfo.length) + 1)

  useEffect(() => {
    fetch("/api/employee")
    .then(resp => resp.json())
    .then((data) => {
        setEmployeesInfo(data);
        setSelectedEmployeeId(Math.floor(Math.random() * (data.length) + 1));
        console.log("employees Info:", employeesInfo)
      })
      .catch((err) => {
        console.log("error");
      });

      fetch(`/api/employee/${selectedEmployeeId}`)
      .then(resp => resp.json())
      .then((data) => {
        setSelectedEmployeeInfo(data)
        console.log("selected employee Info:", selectedEmployeeInfo)
      })
      .catch((err) => {
        console.log("error");
      });
    }, []);

    // const getEmployeeId = (id) => {
    //   setSelectedEmployeeId(id);
    //   console.log(id)
    // }



  return (
    <>

    {/* <Accordion /> */}
    <LeftSide>
    <h1>Accordion</h1>
    </LeftSide>

    <RightSide>
    <h1>People</h1>

      <PeopleContainer>

      {employeesInfo.length > 0 && 
      employeesInfo.map((employee) => {
        return(
        <EmployeeCard
        id={employee.id}
        name={employee.name != null ? `${employee.name} ${employee.last_name}` : ""}
        url={
        employee.picture != null ? employee.picture : "" 
        }
        position={employee.companyInfo.position != null ? employee.companyInfo.position : ""}
        location={employee.companyInfo.location != null ? employee.companyInfo.location : ""}
        department={employee.companyInfo.department != null ? employee.companyInfo.department : ""}
      />)})}
      </PeopleContainer>
      </RightSide>
    </>
  );
}

export default Results;
