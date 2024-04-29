import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { loadProducts } from '../lib/product';
import Link from "next/link";


export default function Home({products}) {

  const getUrl = (product) => {
    if (product?.prescription) {
      return `/medicines/${product.slug}`;
    } else {
      return `/otc/${product.slug}`;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {
          products?.map((product)=>{
            return (
              <Link href={getUrl(product)}>
              <li key={product.id}>{product.name}</li>
              </Link>
            )
          })
        }
      </ul>

    </div>
  )
}

export const getServerSideProps = async () => {
  let products = await loadProducts();
  console.log(products);
  return {
    props: {
      products: products.products
    }
  }
}
