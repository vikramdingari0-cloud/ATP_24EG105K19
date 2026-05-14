function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to Employee Management System
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        This application helps you keep track of all your employees in one place. 
        You can add new records, view the directory, and manage employee details easily.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/list" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
        <a href="/create-emp" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Add New Employee
        </a>
      </div>
    </div>
  )
}

export default Home