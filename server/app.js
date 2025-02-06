import express, { urlencoded } from "express"
import morgan from "morgan"
import { PORT } from "./config.js"
import connection from "./database.js"
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

const app = express()

connection()
//settings

//middlewares
app.use(urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.text())

//routes
app.use(userRoutes)
app.use(blogRoutes)

//listening
app.listen(PORT, console.log(`conectado al puerto:${PORT}`))