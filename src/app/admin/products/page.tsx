"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Package,
  Tag,
  DollarSign,
  ShoppingBag,
  ChevronDown,
  X
} from "lucide-react";
import AddBookModal from "@/components/modals/AddBookModal";
import SuccessModal from "@/components/modals/SuccessModal";

// Mock data - replace with actual data from your backend
const products = [
  {
    id: "PRD001",
    name: "Premium Headphones",
    category: "Electronics",
    price: 25000.00,
    stock: 45,
    status: "In Stock"
  },
  {
    id: "PRD002",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 5000.00,
    stock: 120,
    status: "In Stock"
  },
  {
    id: "PRD003",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 15000.00,
    stock: 0,
    status: "Out of Stock"
  },
  {
    id: "PRD004",
    name: "Gaming Monitor",
    category: "Electronics",
    price: 75000.00,
    stock: 15,
    status: "Low Stock"
  }
];

interface Book {
  name: string;
  description: string;
  qty: number;
  sellingPrice: number;
  normalPrice: number;
  category: string;
  language: string;
  format: string;
  genre: string;
  rated: string;
  coverImage: string;
  isbn: string;
  publisher: string;
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addedBooks, setAddedBooks] = useState<Book[]>([]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBook = (book: Book) => {
    setAddedBooks([book, ...addedBooks]);
  };

  const handleProceed = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsAddBookModalOpen(false);
    setIsSuccessModalOpen(true);
    setAddedBooks([]);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <p className="text-2xl font-semibold text-gray-900">{products.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-2xl font-semibold text-gray-900">4</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Tag className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-semibold text-gray-900">#120,000</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Products</h2>
              <p className="text-sm text-gray-500">Search and filter your product catalog</p>
            </div>
            <button
              onClick={() => setIsAddBookModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add New Book
            </button>
          </div>

          {/* Search and Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by book name, ISBN, or publisher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select 
                className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none bg-white"
              >
                <option value="">All Categories</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery & Thriller</option>
                <option value="biography">Biography</option>
                <option value="history">History</option>
                <option value="self-help">Self-Help</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select 
                className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none bg-white"
              >
                <option value="">All Status</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="low-stock">Low Stock</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-500">Active filters:</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                Fiction
                <button className="ml-1 hover:text-indigo-900">
                  <X className="h-4 w-4" />
                </button>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                In Stock
                <button className="ml-1 hover:text-indigo-900">
                  <X className="h-4 w-4" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">#{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'In Stock'
                        ? 'bg-green-100 text-green-800'
                        : product.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-gray-400 hover:text-gray-500">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <AddBookModal
        isOpen={isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
        onAddBook={handleAddBook}
        onProceed={handleProceed}
        books={addedBooks}
        isLoading={isLoading}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
} 