// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    
    const products = [{
        slug: 'product_a',
        name: 'Product A',
        prescription: true
    },{
        slug: 'product_b',
        name: 'Product B',
        prescription: false
    },{
        slug: 'product_c',
        name: 'Product C',
        prescription: true
    }];

    res.status(200).json({ products });
}
