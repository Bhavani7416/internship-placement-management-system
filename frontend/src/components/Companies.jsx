import { useEffect, useState } from "react";
import axios from "axios";

function Companies() {
  const [companies, setCompanies] = useState([]);

  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [packageOffered, setPackageOffered] = useState("");
  const [search, setSearch] = useState("");

  const loadCompanies = () => {
    axios
      .get("http://localhost:8081/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const addCompany = () => {
    axios
      .post("http://localhost:8081/companies", {
        companyName,
        location,
        packageOffered,
      })
      .then(() => {
        setCompanyName("");
        setLocation("");
        setPackageOffered("");
        loadCompanies();
      });
  };

  const deleteCompany = (id) => {
    axios
      .delete(`http://localhost:8081/companies/${id}`)
      .then(() => loadCompanies());
  };

  const filteredCompanies = companies.filter((c) =>
    c.companyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Companies Management</h1>

      <div className="form-container">
        <input
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="Package Offered"
          value={packageOffered}
          onChange={(e) => setPackageOffered(e.target.value)}
        />

        <button onClick={addCompany}>
          Add Company
        </button>
      </div>

      <br />

      <input
        placeholder="Search Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Location</th>
            <th>Package</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.companyName}</td>
              <td>{company.location}</td>
              <td>{company.packageOffered}</td>

              <td>
                <button
                  onClick={() => deleteCompany(company.id)}
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

export default Companies;