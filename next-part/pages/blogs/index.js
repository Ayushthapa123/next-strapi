import Head from "next/head";
import Link from "next/link";
import axios from 'axios'

import styles from '../../sass/blogshome.module.scss'

import { fromImageToUrl } from "../../utils/urls";






export async function getStaticProps() {
  let blogResults = await axios.get('http://localhost:1337/api/blogs');

  return {
    props: {
      articles: blogResults.data,
    },
    revalidate: 50,
  };
}

export default function Home({ articles }) {

console.log(articles.data[0])


  return (
    <div className='blog-list'>
      <Head>
        <title>Hosteltrend blogs</title>
    
      </Head>

      <main className={styles.blogs}>
   
          {articles.data.map((article) => (

<div>
<img src={fromImageToUrl(article.coverphoto)} alt='dk'/>
            <div key={article.attributes.title}>

              <Link href={"/blogs/" + article.attributes.slug}>

                <a>
                {/* {article.fields.coverphoto.fields.file.url && <img src={'https:' + article.fields.coverphoto.fields.file.url} alt='Cover Image' width={article.fields.coverphoto.fields.file.details.image.width} height={article.fields.coverphoto.fields.file.details.image.height}/>
} */}
                <h2>{article.attributes.title}</h2>
                <p>{article.attributes.description}</p>
                <span>Published date: {article.attributes.date}</span>
               


                </a>
              </Link>
            </div>

            </div>
          ))}
        
      </main>



   

    </div>
  );
}
