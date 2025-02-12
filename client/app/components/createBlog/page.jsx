"use client"
import UserContext from "@/app/context/sessionContext"
import { useContext } from "react"
import closePng from '@/app/assets/close.png'
import './createBlog.css'
import { createBlogRequest } from "@/app/api/blogApi"

const CreateBlog = () => {

    const {setBlogs, createBlogForm, setCreateBlogForm } = useContext(UserContext)

    const uploadBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('blogImg', e.target.elements.blogImg.files[0])
        formData.append('title', e.target.elements.title.value)
        formData.append('description', e.target.elements.description.value)
        const res = await createBlogRequest(formData)
        setBlogs(prevBlogs => [...prevBlogs, res.data])
        setCreateBlogForm(false)
    }

    return (
        <>
            {
                createBlogForm &&
                <>
                    <div onClick={() => setCreateBlogForm(false)} className="fixed bg-slate-900 left-0 right-0 top-0 bottom-0 opacity-80 z-30"></div>
                    <form className="forms fixed left-0 right-0 top-0 bottom-0 bg-slate-800 pt-6 pb-6 pl-8 pr-8 rounded-lg mx-auto mt-10 mb-10 z-40" style={{ width: '700px' }} encType="multipart/form-data" onSubmit={(e) => uploadBlog(e)}>
                        <button onClick={() => setCreateBlogForm(false)} className="absolute right-6 top-5"><img src={closePng.src} alt=""></img></button>
                        <div>
                            <h3 className="text-2xl mb-4">Subir blog</h3>
                        </div>
                        <div className="form-group w-full mt-5 mb-5">
                            <label className="text-white">Imagen</label>
                            <input type="file" className="bg-slate-700 p-2 rounded-lg w-full" name="blogImg"></input>
                        </div>
                        <div className="form-group w-full mt-5 mb-5">
                            <label className="text-white">Titulo</label>
                            <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full" name="title"></input>
                        </div>
                        <div className="form-group w-full mt-5 mb-5">
                            <label className="text-white">Descripcion</label>
                            <textarea type="text" placeholder="Desarrolla el cuerpo del blog" className="bg-slate-700 p-2 rounded-lg w-full" name="description" rows={20}></textarea>
                        </div>
                        <button type="submit" className="bg-blue-800 text-white pt-3 pb-3 w-full rounded-lg mb-6 mt-6">Revisar</button>
                    </form>
                </>
            }
        </>
    )
}

export default CreateBlog