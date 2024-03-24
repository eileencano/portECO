import {Router} from "express"
const  router = Router()

//Estaremos modificando el titulo de la pagina
router.get('/',(req,res)=> res.render('index',{title: 'Bienvenido- Home'}))
router.get('/about',(req,res)=> res.render('about',{title: 'About '}))
router.get('/projects',(req,res)=> res.render('projects',{title: 'proyects '}))
router.get('/hobbies',(req,res)=> res.render('hobbies',{title: 'hobbies '}))
router.get('/contact',(req,res)=> res.render('contact',{title: 'Contact'}))


export default router