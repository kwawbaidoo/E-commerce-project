import React, { useState } from 'react';

const AdminAddProduct = () => {
  const [categories] = useState(['Electronics', 'Books', 'Clothing']);
  const [subcategories, setSubcategories] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    imagePath: ''
  });

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category: selectedCategory });

    // Example subcategories
    if (selectedCategory === 'Electronics') {
      setSubcategories(['Phones', 'Laptops', 'Cameras']);
    } else if (selectedCategory === 'Books') {
      setSubcategories(['Fiction', 'Non-Fiction', 'Comics']);
    } else if (selectedCategory === 'Clothing') {
      setSubcategories(['Men', 'Women', 'Kids']);
    } else {
      setSubcategories([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm py-2 px-3"
            value={formData.category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
          <select
            id="subcategory"
            name="subcategory"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm py-2 px-3"
            value={formData.subcategory}
            onChange={handleInputChange}
          >
            <option value="">Select Subcategory</option>
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="imagePath" className="block text-sm font-medium text-gray-700">Image Path</label>
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={formData.imagePath}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
