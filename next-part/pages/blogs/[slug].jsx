
import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';

import styles from '../../sass/blogslug.module.scss'

import MarkdownIt from 'markdown-it';

// import BlogLayout from '../../components/blogs/Layout';



export async function getStaticPaths() {
  let postsRes=await axios.get("http://localhost:1337/api/blogs");

  return {
    paths: postsRes.data.data.map((article)=> ({
        params: {
            slug:article.attributes.slug.toString(),
            
            
            
        }
    })),
    fallback:false,
  };
}

export async function getStaticProps({ params }) {
  let postRes = await axios.get(`http://localhost:1337/api/blogs/?slug=${params.slug}`)

  return {
    props: {
      post: postRes.data.data[0].attributes,
    },
    revalidate:2, 
  
  };
}




export default function Article({post}) {
  if (!post) return <div>404</div>;

const md=new MarkdownIt();
const htmlContent=md.render(post.body);



useEffect(()=> {

    const fetchData = async () => {
        let postRes = await axios.get(`http://localhost:1337/api/blogs/1`)
        console.log('slug',postRes.data.data.attributes.title);
      }

      fetchData();
   
},[])

  return (
    <div>

<Head>

</Head>


<section dangerouslySetInnerHTML={{ __html:htmlContent}} className={styles.contents}></section>

{/* 
<BlogLayout>

<div className={styles.header}>
<h1>{article.fields.title}</h1>
<p>Published date: {article.fields.date}| Written by:{article.fields.author} </p>
</div>

   <section className={styles.content}>
      <div className={styles.article}>
        {documentToReactComponents(article.fields.body,
        
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <img
              alt='image'
                src={"https:" + node.data.target.fields.file.url}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
              />
            ),
          },
        }
        
        )}
      </div>



 </section>


</BlogLayout> */}

    </div>
  );
}
