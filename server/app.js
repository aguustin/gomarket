import * as express from "express";
import morgan from "morgan"
import { PORT } from "./config.js"
import connection from "./database.js"
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import cors from "cors"

const app = express()

connection()
//settings

//middlewares
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))

//routes
app.use(userRoutes)
app.use(blogRoutes)

//listening
app.listen(PORT, console.log(`conectado al puerto:${PORT}`))