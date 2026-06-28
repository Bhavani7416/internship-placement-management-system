import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [search, setSearch] = useState("");

  const loadStudents = () => {
    axios
      .get("http://localhost:8081/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = () => {
    axios
      .post("http://localhost:8081/students", {
        name,
        email,
        branch,
      })
      .then(() => {
        setName("");
        setEmail("");
        setBranch("");
        loadStudents();
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:8081/students/${id}`)
      .then(() => loadStudents());
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Students Management</h1>

      <div className="form-container">
        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <button onClick={addStudent}>
          Add Student
        </button>
      </div>

      <br />

      <input
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>

              <td>
                <button
                  onClick={() => deleteStudent(student.id)}
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

export default Students;