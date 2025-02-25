"use client"
import { getBlogByIdRequest } from '@/app/api/blogApi';
import prueba from '@/app/assets/prueba.jpg';
import '@/app/Blogs/blogs.css'
import React, { use, useEffect, useState } from 'react';

const LeerBlog = ({params}) => {

    //console.log("y pam", params.BlogId)
    const [readBlog, setReadBlog] = useState([])
    const blogId = React.use(params).BlogId
    
    useEffect(() => {
        const getBlog = async () => {
            
           const res = await getBlogByIdRequest(blogId)
           setReadBlog(res.data)
        }
        console.log(readBlog)
        getBlog()
    }, [])

    return(
        <>
            {readBlog?.map((rd) => 
                <div key={rd._id} className="leer-blog p-20 max-[850px]:pt-20 max-[850px]:pb-20 max-[850px]:pl-2 max-[850px]:pr-2 max-[850px]:w-screen">
                    <div>
                        <img className='mx-auto' style={{height: '600px'}} src={rd.image} alt=""></img>
                    </div>
                    <div className='text-center mt-6'>
                        <h1>{rd.title}</h1>
                    </div>
                    <div className='leer-desc mx-auto p-6 max-[850px]:w-full'>
                        <p>
                            {rd.description}
                        </p>
                    </div>
                    <div className='relative mt-10'>
                        <p className='absolute right-60 text-slate-400 max-[850px]:right-10'>{rd.blogDate}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default LeerBlog