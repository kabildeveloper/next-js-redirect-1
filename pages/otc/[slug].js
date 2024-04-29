import Head from "next/head"
import {getProduct} from "../../lib/product";
const OTC = ({slug, product}) => {

    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div>
                <h1>OTC</h1>
                <p>{slug}</p>
                <p>{product?.name}</p>
            </div>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const { slug } = ctx.query;
    const { url } = ctx.req;
    
    const { product } = await getProduct(slug);
    
    if(product.prescription) {
        return {
            redirect: {
                permanent: true,
                destination: `/medicines/${slug}`,
            }    
        };
    }
    
    return {
        props: {
            slug,
            product
        }
    }
}


export default OTC;