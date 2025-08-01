import React, { useEffect, useState } from 'react';
import { Star, Pencil, Trash2 } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    rating: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const { title, price, image, rating } = newProduct;

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!image.trim()) newErrors.image = "Image URL is required.";
    if (!price || isNaN(price) || parseFloat(price) <= 0) newErrors.price = "Price must be a number greater than 0.";
    if (rating === '' || isNaN(rating) || parseFloat(rating) < 0 || parseFloat(rating) > 5) {
      newErrors.rating = "Rating must be between 0 and 5.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddOrEditProduct = async () => {
    if (!validateForm()) return;

    const productData = {
      ...newProduct,
      price: parseFloat(newProduct.price),
      rating: {
        rate: parseFloat(newProduct.rating),
        count: Math.floor(Math.random() * 100) + 1,
      },
      description: "User added product",
      category: "custom",
    };

    if (editingId !== null) {
      const updated = products.map(p => p.id === editingId ? { ...productData, id: editingId } : p);
      setProducts(updated);
      setEditingId(null);
    } else {
      const newAdded = { ...productData, id: products.length + 1 };
      setProducts(prev => [...prev, newAdded]);
    }

    setNewProduct({ title: '', price: '', image: '', rating: '' });
    setShowForm(false);
    setErrors({});
  };

  const handleEdit = (product) => {
    setNewProduct({
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating?.rate ?? 0,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Just For You</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setNewProduct({ title: '', price: '', image: '', rating: '' });
            setErrors({});
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded shadow"
        >
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="text-lg font-bold mb-4">{editingId ? "Edit Product" : "Add New Product"}</h3>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Title</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={newProduct.title}
                onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price (PKR)</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={newProduct.price}
                onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={newProduct.image}
                onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rating (0 to 5)</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={newProduct.rating}
                onChange={e => setNewProduct({ ...newProduct, rating: e.target.value })}
              />
              {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
            </div>
          </form>
          <button
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
            onClick={handleAddOrEditProduct}
          >
            {editingId ? "Update" : "Submit"}
          </button>
        </div>
      )}

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {products.map((product) => {
          const price = `Rs.${(product.price * 280).toFixed(0)}`;
          const discount = Math.floor(Math.random() * 50) + 10;
          const fullStars = Math.round(product.rating?.rate || 0);

          return (
            <div
              key={product.id}
              className="bg-white shadow rounded overflow-hidden p-3 relative group"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain"
              />
              <h3 className="mt-2 text-sm font-semibold line-clamp-2">{product.title}</h3>
              <div className="mt-1 text-orange-500 font-bold text-sm">
                {price} <span className="text-xs text-black">-{discount}%</span>
              </div>
              <div className="flex items-center mt-1">
                {Array(5).fill().map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < fullStars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({product.rating?.count})</span>
              </div>

              {/* Edit/Delete on Hover */}
              <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
                <button onClick={() => handleEdit(product)}>
                  <Pencil size={18} className="text-blue-600 hover:scale-110" />
                </button>
                <button onClick={() => handleDelete(product.id)}>
                  <Trash2 size={18} className="text-red-600 hover:scale-110" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
