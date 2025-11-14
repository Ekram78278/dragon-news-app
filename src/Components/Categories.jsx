import React, { use } from 'react';
import { Link, useParams } from 'react-router';
    const categoryPromise = fetch("/public/categories.json").then((res) => res.json())

const Categories = () => {
    console.log(categoryPromise);
    const categories = use(categoryPromise);
    const {id} = useParams();
    return (
        <div>
            <h2 className='text-primary font-semibold'> All Categories({categories.length}) </h2>
        
       <div className='grid grid-cols-1 mt-5 gap-3 '>
         {
            categories.map(category => <Link key={category.id}
                
                className={`btn bg-base-100 border-0 ${id == category.id 
            ? 'bg-base-300' 
            : 'bg-base-100 hover:bg-base-200 text-accent'
          }  `}
                to={`/category/${category.id}`}
                
                >{category.name}</Link>)
        }
       </div>
        
        </div>
    );
};

export default Categories;