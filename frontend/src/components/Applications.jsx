import { useEffect, useState } from "react";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const loadApplications = () => {
    axios
      .get("http://localhost:8081/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const addApplication = () => {
    axios
      .post("http://localhost:8081/applications", {
        studentName,
        companyName,
        status,
      })
      .then(() => {
        setStudentName("");
        setCompanyName("");
        setStatus("");
        loadApplications();
      });
  };

  const deleteApplication = (id) => {
    axios
      .delete(`http://localhost:8081/applications/${id}`)
      .then(() => loadApplications());
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.studentName.toLowerCase().includes(search.toLowerCase()) ||
      app.companyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Applications Management</h1>

      <div className="form-container">
        <input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <input
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button onClick={addApplication}>
          Add Application
        </button>
      </div>

      <br />

      <input
        placeholder="Search Application..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Company</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.studentName}</td>
              <td>{app.companyName}</td>
              <td>{app.status}</td>

              <td>
                <button
                  onClick={() => deleteApplication(app.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;