// app\api\product\route.js
import { supabase } from '@/supabase/supabaseClient';

// Ürün ekleme
export async function POST(req) {
    const { name, quantity, price } = await req.json();
    const { data, error } = await supabase.from('products').insert([{ name, quantity, price }]);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 201 });
}

// Tüm ürünleri listeleme
export async function GET() {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}
