import { useLocation } from "react-router";

function Employees() {
  const { state } = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Employee Details</h1>
        <div className="space-y-4 text-lg text-gray-700">
          <p><span className="font-semibold">Name:</span> {state.name}</p>
          <p><span className="font-semibold">Email:</span> {state.email}</p>
          <p><span className="font-semibold">Mobile:</span> {state.mobile}</p>
          <p><span className="font-semibold">Designation:</span> {state.designation}</p>
          <p><span className="font-semibold">Company:</span> {state.companyName}</p>
        </div>
      </div>
    </div>
  );
}

export default Employees;