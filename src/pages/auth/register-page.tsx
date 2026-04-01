import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />

        <button className="bg-black text-white py-2 rounded">
          Register
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};