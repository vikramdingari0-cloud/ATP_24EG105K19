import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      let res = await fetch(`${API_URL}/api/emp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        navigate("/list");
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason || "Failed to create employee");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10 text-xl">Creating employee...</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add New Employee</h2>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Full Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Mobile</label>
          <input
            type="number"
            {...register("mobile")}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Designation</label>
          <input
            type="text"
            {...register("designation")}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Company</label>
          <input
            type="text"
            {...register("companyName")}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold">
            Add Employee
          </button>
          <button type="button" onClick={() => navigate("/list")} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 font-bold">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEmp;