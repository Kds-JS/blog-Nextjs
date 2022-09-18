import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4} from 'uuid';

function index(props) {

    const blog = props.array;
    console.log(blog);

    return (
        <div className='container'>
            <div className='mb-5 text-center'>
                <h1>Bienvenue sur le Blog</h1>
                <h6>Voici les articles</h6>
            </div>

            <div className="row g-5">

                {blog.map(item => (

                <div className="col-md-4 " key={uuidv4()}>

                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Blog description map...</p>
                        <Link href={`blog/${item.id}`}>
                        <a>Lire cet article</a>
                        </Link>
                    </div>
                    </div>

                </div>

                ))}

            </div>
        </div>
    );
}

export default index;

export async function getStaticProps(){
    
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const array = await data.json();

    return {
        props: {
            array
        }
    }
}