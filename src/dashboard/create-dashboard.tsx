import React, { useEffect, useState } from 'react'
import type { FormType } from '../type/type';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CreateDashboard() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormType>({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // optional chaining

    if (!file) return;
    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) {
      toast.error("Veuillez remplir tous les champs ❌");
      return;
    }
    try { // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Produit créé avec succès 🎉");
      // reset storage
      localStorage.removeItem("product-form");
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });
      setTimeout(() => {
        navigate("/dashboard/products");
      }, 1000);
    }
    catch (error) {
      toast.error("Erreur lors de la création ❌");
    }
  };
  // Charger les données au montage
  useEffect(() => {
    const savedForm = localStorage.getItem("product-form");
    if (savedForm) {
      setForm({
        ...JSON.parse(savedForm),
        image: null,
      });
    }
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    const { image, ...formWithoutImage } = form;
    localStorage.setItem("product-form", JSON.stringify(formWithoutImage));
  }, [form]);
  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.price !== "" &&
      // form.description.trim() !== "" &&
      form.category !== ""
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Create a new product
        </h1>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium">Product Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">Price:</label>
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Description */}
          <div className="md:col-span-1">
            <label className="block mb-2 font-medium">Description:</label>
            <textarea
              name="description"
              placeholder="Enter product description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-32 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">Category:</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          {  /* Image Upload */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Image:</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={handleImage}
                className="hidden"
                id="upload"
              />
              <label htmlFor="upload" className="cursor-pointer text-gray-500">
                Click to upload image
              </label>
            </div>
          </div>
          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`px-6 py-3 rounded-lg text-white transition
              ${isFormValid() ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"} `}  >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
