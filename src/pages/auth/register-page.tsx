import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    // validation simple
    if (!formData.email || !formData.password) {
      toast.error("Tous les champs sont obligatoires");
      return;
    }
    //save user
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success("Inscription réussie !");
    navigate("/login");
  };




  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="firstName" placeholder="First Name" className="border p-2  rounded" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" className="border p-2  rounded" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="border p-2  rounded" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="border p-2  rounded" onChange={handleChange} />
        <button className="bg-black text-white py-2 rounded">
          Register
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};