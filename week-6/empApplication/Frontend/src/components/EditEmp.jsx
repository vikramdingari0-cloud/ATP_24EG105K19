import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config";

function EditEmp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${API_URL}/api/emp/${state._id}`,
        modifiedEmp
      );
      if (res.status === 200) {
        navigate("/list");
      } else {
        throw new Error("Failed to update employee");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!state) {
    return <p className="text-center text-red-500 text-3xl">No employee data provided</p>;
  }
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
      <form
        onSubmit={handleSubmit(saveModifiedEmp)}
        className="max-w-md mx-auto mt-10"
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: "Name is required" })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: "Email is required" })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-pink-400 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmp;