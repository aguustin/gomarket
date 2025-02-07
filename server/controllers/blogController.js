import cloudinary from "../lib/cloudinary.js"
import blogModel from "../models/blogModel.js"

export const createBlogController = async (req, res) => {

    const {title, description} = req.body
    console.log('title: ', title, ' ', 'description: ', description)
    if(req.file){
            cloudinary.uploader.upload_stream({ resource_type: 'auto', folder: 'gomarket' }, (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).json({ error: 'Error uploading to Cloudinary' });
            }
            console.log(result.secure_url)
            blogModel.create({
                image: result.secure_url,
                ...req.body,
                blogDate: Date.now()
            })
            res.json({ public_id: result.public_id, url: result.secure_url });
            
          }).end(req.file.buffer);
         
    }else{
        res.status(401).json({error: 'no hay req.file'})
    }

}


export const updateBlogController = async (req, res) => {
    const {blogId, title, description} = req.body

    if(req.file){
        cloudinary.uploader.upload_stream({ resource_type: 'auto', folder: 'gomarket' }, async (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Error uploading to Cloudinary' });
        }
        await blogModel.updateOne(
            {_id:blogId},
            {
                $set:{
                    image: result.secure_url,
                    title: title,
                    description: description,
                    blogDate: Date.now()
                }
            })
        res.json({ public_id: result.public_id, url: result.secure_url });
        
      }).end(req.file.buffer);
     
    }else{
        await blogModel.updateOne(
            {_id:blogId},
            {
                $set:{
                    ...req.body,
                    blogDate: Date.now()
                }
        })
        res.sendStatus(200)
    }
}

export const getAllBlogsController = async (req, res) => {
    const getAllBlogs = await blogModel.find()

    res.send(getAllBlogs)
}

export const deleteBlogController = async (req, res) => {

    await blogModel.deleteOne({_id: req.param.blogId})

    res.sendStatus(200)
}