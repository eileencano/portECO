// importacion de modulos 
import express, { Router } from "express"
import {dirname, join} from "path"
import { fileURLToPath} from "url"
import indexRoutes from './routes/index.js'

import ejs from "ejs"


//cons de direccionamiento
const app = express ()
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

//console.log(join(__dirname, 'views'))

//set de vistas (seteos)
app.set('views', join(__dirname, 'views'))
app.set('view engine' , 'ejs')

// enrutamiento
app.use(indexRoutes)
app.use(express.static(join(__dirname,'public')))




app.get('/',(req,res)=> res.render('index'))
app.get('/about',(req,res)=> res.render('about'))
app.get('/about',(req,res)=> res.render('projects'))
app.get('/about',(req,res)=> res.render('hobbies'))
app.get('/contact',(req,res)=> res.render('contact'))

//Escucha del servidor
app .listen(process.env.PORT || port)
console.log("App Online on Port",port,"🫣")

