import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [studentCount, setStudentCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);

  const [selected, setSelected] = useState("");

  useEffect(() => {

    axios.get("http://localhost:8081/students")
      .then((res) => setStudentCount(res.data.length))
      .catch((err) => console.log(err));

    axios.get("http://localhost:8081/companies")
      .then((res) => setCompanyCount(res.data.length))
      .catch((err) => console.log(err));

    axios.get("http://localhost:8081/applications")
      .then((res) => setApplicationCount(res.data.length))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div
      className="page"
      onClick={() => setSelected("")}
    >
      <h1>Internship and Placement Management System</h1>

      <div className="cards">

        <div
          className="card"
          onClick={(e) => {
            e.stopPropagation();
            setSelected("students");
          }}
        >
          <h2>Students</h2>
          <p>Manage student profiles and academic information</p>
        </div>

        <div
          className="card"
          onClick={(e) => {
            e.stopPropagation();
            setSelected("companies");
          }}
        >
          <h2>Companies</h2>
          <p>Manage recruiting companies and job opportunities</p>
        </div>

        <div
          className="card"
          onClick={(e) => {
            e.stopPropagation();
            setSelected("applications");
          }}
        >
          <h2>Applications</h2>
          <p>Track internship and placement applications efficiently</p>
        </div>

      </div>

      {selected === "students" && (
        <div className="count-box">
          <h2>Total Students: {studentCount}</h2>
        </div>
      )}

      {selected === "companies" && (
        <div className="count-box">
          <h2>Total Companies: {companyCount}</h2>
        </div>
      )}

      {selected === "applications" && (
        <div className="count-box">
          <h2>Total Applications: {applicationCount}</h2>
        </div>
      )}

    </div>
  );
}

export default Dashboard;