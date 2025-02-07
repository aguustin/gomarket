"use client"
import UserContext from "@/app/context/sessionContext"
import { useContext } from "react"
import closePng from '@/app/assets/close.png'
const CreateBlog = () => {

    const {createBlogForm} = useContext(UserContext)

    const uploadBlog = async () => {
        const formData = new FormData()
        formData.append('blogImg', blogImg)
        formData.append('title', title)
        formData.append('description', description)

        const res = await createBlogRequest(formData)
    }

    return(
        <>
        {
        createBlogForm &&
            <form className="forms relative bg-slate-800 pt-6 pb-6 pl-8 pr-8 rounded-lg mx-auto mt-10 mb-10" style={{width:'700px'}} encType="multipart/form-data" onSubmit={() => uploadBlog()}>
                         <button onClick={() => closeForms()} className="absolute right-6 top-5"><img src={closePng.src} alt=""></img></button>
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
                        <button type="submit" className="bg-blue-800 text-white pt-3 pb-3 w-full rounded-lg mb-6 mt-6" disabled={true}>Revisar</button>
                     
            </form>
        }
        </>
    )
}

export default CreateBlog