import React from 'react';

function article(props) {

    const article = props.article;

    return (
        <div className='container'>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    );
}

export default article;

export async function getStaticProps(context){

    const slug = context.params.article;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const article = await data.json();

    return {
        props: {
            article
        }
    }
}

export async function getStaticPaths(){

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const array = await data.json();

    const paths = array.map(item => ({
        params: {article: item.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}