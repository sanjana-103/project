import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';

const backendUrl = 'http://localhost:4000'; // Update if deployed

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch product list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { token }
      });

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product list.");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
  if (!window.confirm('Are you sure you want to delete this product?')) return;

  try {
    const response = await axios.delete(`${backendUrl}/api/product/remove/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`  // THIS IS THE KEY CHANGE
      }
    });

    if (response.data.success) {
      toast.success('Product deleted successfully!');
      setList(prevList => prevList.filter(item => item._id !== id));
    } else {
      toast.error(response.data.message || "Failed to delete product.");
    }
  } catch (error) {
    console.error("Delete error:", error.response ? error.response.data : error.message);
    toast.error("Failed to delete product.");
  }
};



  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container">
      <h2 className="product-title">Product List</h2>

      <div className="product-table">
        <div className="product-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Ingredients</span>
          <span>Instructions</span>
          <span>Action</span>
        </div>

        {list.map((item) => (
          <div className="product-row" key={item._id}>
            <img src={item.image} alt={item.name} className="product-image" />
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>{Array.isArray(item.ingredients) ? item.ingredients.join(", ") : item.ingredients}</span>
            <span>{item.instructions}</span>
            <span>
              <button className="delete-button" onClick={() => handleDelete(item._id)}>
                <MdDeleteForever size={20} />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
