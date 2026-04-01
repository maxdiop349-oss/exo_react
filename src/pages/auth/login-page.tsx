import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
          <div className='flex items-center justify-end gap-2 '>
        <p> Si vous n'avez pas encore de compte</p>
        <Link className='border p-2 hover:bg-gray-100 transition-colors duration-200 bg-white border-black rounded-xl px-4 py-2' to="/register">Inscrivez-vous</Link>
      </div>
         <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />

        <button className="bg-black text-white py-2 rounded">
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
    </div>
   
  );
};