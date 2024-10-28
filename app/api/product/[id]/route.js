//  app\api\product\[id]\route.js
import { supabase } from '@/supabase/supabaseClient';

// Ürünü ID ile güncelleme
export async function PATCH(req, { params }) {
    const { id } = params;
    const { name, quantity, price } = await req.json();
    const { data, error } = await supabase.from('products').update({ name, quantity, price }).eq('id', id);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}

// Ürünü ID ile silme
export async function DELETE(req, { params }) {
    const { id } = params;
    const { data, error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}
