export const loadProducts = async () => {
    let res = await fetch('http://localhost:3000/api/product/');
    return await res.json();
}

export const getProduct = async (slug) => {
    let res = await fetch(`http://localhost:3000/api/product/${slug}`);
    return await res.json();
}