'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const res = await fetch('/api/product');
        const data = await res.json();
        setProducts(data);
    }

    // Ürün silme
    async function handleDeleteProduct(id) {
        const res = await fetch(`/api/product/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            fetchProducts();
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Ürünler</h1>
            <ul className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                {products.map((product) => (
                    <li key={product.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">{product.name}</span>
                            <div className="text-gray-600 flex items-center">
                                <span className="mr-4">{product.quantity} adet</span>
                                <span className="font-semibold text-gray-800 mr-4">{product.price.toFixed(2)}₺</span>
                                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:text-red-700 font-bold">Sil</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/">Ürün Ekle</Link>
            </button>
        </div>
    );
}
