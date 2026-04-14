import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      formData.email === user.email &&
      formData.password === user.password
    ) {
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } else {
      toast.error("Email ou mot de passe incorrect");
    }
  };

  return (
    <div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          Welcome to Shop
          <ShoppingCart className="w-6 h-6" />
        </h2>
        <form onSubmit={handleSubmit}
          className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border p-2 rounded"
            name="email"
            required
            value={formData.email}
            onChange={handleChange} />
          <input type="password" placeholder="Password" className="border p-2 rounded"
            name="password"
            required
            value={formData.password}
            onChange={handleChange} />
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