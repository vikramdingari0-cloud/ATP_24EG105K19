import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config";

function ListOfEmps() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployees = (empObj) => {
    navigate("/emps", { state: empObj });
  };

  const gotoEditEmployees = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmployee = async (id) => {
    try {
      setLoading(true);
      let res = await fetch(`${API_URL}/api/emp/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        getEmps();
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmps();
  }, []);

  async function getEmps() {
    try {
      setLoading(true);
      let res = await fetch(`${API_URL}/api/emp`);
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Employee List</h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{empObj.name}</h3>
            <div className="text-gray-700 space-y-1 mb-4">
              <p><strong>Email:</strong> {empObj.email}</p>
              <p><strong>Mobile:</strong> {empObj.mobile}</p>
              <p><strong>Designation:</strong> {empObj.designation}</p>
              <p><strong>Company:</strong> {empObj.companyName}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => gotoEmployees(empObj)}
                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployees(empObj)}
                className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmployee(empObj._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {emps.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-10">No employees found.</p>
      )}
    </div>
  );
}

export default ListOfEmps;