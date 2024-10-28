'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const router = useRouter();

    // Ürün ekleme
    async function handleAddProduct() {
        const res = await fetch('/api/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, quantity, price })
        });

        if (res.ok) {
            setName('');
            setQuantity(0);
            setPrice(0);
            router.push('/products');  // Ürünler sayfasına yönlendir
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Yeni Ürün Ekle</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }} className="bg-white shadow-md rounded-lg p-6">
                {/* Form alanları burada */}
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">Ürün Adı</label>
                    <input id="productName" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3" />
                </div>
                <div className="mb-4">
                    <label htmlFor="productQuantity" className="block text-gray-700 text-sm font-bold mb-2">Miktar</label>
                    <input id="productQuantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="0" className="shadow appearance-none border rounded w-full py-2 px-3" />
                </div>
                <div className="mb-6">
                    <label htmlFor="productPrice" className="block text-gray-700 text-sm font-bold mb-2">Fiyat</label>
                    <input id="productPrice" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" step="0.01" className="shadow appearance-none border rounded w-full py-2 px-3" />
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ekle</button>
                </div>
            </form>
        </div>
    );
}
