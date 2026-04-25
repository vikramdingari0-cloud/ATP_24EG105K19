import { useEffect, useState } from "react";

function App() {
  const [emps, setEmps] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    companyName: ""
  });

  const [editId, setEditId] = useState(null);

  //  Fetch employees
  const getEmployees = async () => {
    const res = await fetch("http://localhost:3000/api/emp");
    const data = await res.json();
    setEmps(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  //  Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch(`http://localhost:3000/api/emp/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setEditId(null);
    } else {
      await fetch("http://localhost:3000/api/emp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      companyName: ""
    });

    setShowModal(false);
    setMessage("Saved successfully!");
    setTimeout(() => setMessage(""), 2000);

    getEmployees();
  };

  //  Delete
  const deleteEmp = async (id) => {
    await fetch(`http://localhost:3000/api/emp/${id}`, {
      method: "DELETE"
    });
    setMessage("Deleted successfully!");
    setTimeout(() => setMessage(""), 2000);
    getEmployees();
  };

  //  Edit
  const editEmp = (emp) => {
    setForm(emp);
    setEditId(emp._id);
    setShowModal(true);
  };

  //  Filter
  const filteredEmps = emps.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="hover:bg-blue-600 p-2 rounded cursor-pointer">
            Employees
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Management</h1>

          <button
            onClick={() => {
              setForm({
                name: "",
                email: "",
                mobile: "",
                designation: "",
                companyName: ""
              });
              setEditId(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Employee
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Company</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmps.map((emp) => (
                <tr key={emp._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.mobile}</td>
                  <td className="p-3">{emp.designation}</td>
                  <td className="p-3">{emp.companyName}</td>

                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => editEmp(emp)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmp(emp._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96">

              <h2 className="text-xl font-bold mb-4">
                {editId ? "Update Employee" : "Add Employee"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input className="input w-full" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input className="input w-full" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input className="input w-full" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} />
                <input className="input w-full" name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} />
                <input className="input w-full" name="companyName" placeholder="Company" value={form.companyName} onChange={handleChange} />

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Save
                </button>
              </form>

              <button
                onClick={() => setShowModal(false)}
                className="mt-3 text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* TOAST */}
        {message && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;