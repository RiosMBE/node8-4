const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

let datos = [{
    matricula: "2020030737",
    nombre: "Brian Eduardo Rios Muñoz",
    sexo: "M",
    materias: ["Ingles", "Tecnologias I", "Base de datos"]
},
{
    matricula: "2020030330",
    nombre: "Gabriel Santoyo Peña",
    sexo: "M",
    materias: ["Ingles", "Tecnologias I", "Base de datos"]
},
{
    matricula: "2020030296",
    nombre: "Luis Angel Santillan Lopez",
    sexo: "M",
    materias: ["Ingles", "Tecnologias I", "Base de datos"]
},
{
    matricula: "2020030280",
    nombre: "Jimena Gonzalez Osuna",
    sexo: "F",
    materias: ["Ingles", "Tecnologias I", "Base de datos"]
},
{
    matricula: "2020030312",
    nombre: "Lizbet Argelia Padilla Moreno",
    sexo: "F",
    materias: ["Ingles", "Tecnologias I", "Base de datos"]
}]

router.get('/', (req, res)=>{
    //res.send("<h1>Iniciamos con express</h1>");
    res.render('index.html',{titulo: "Listado de alimnos", listado:datos})
})

//Tablas
router.get('/tablas', (req, res)=>{
    const valores ={
        tabla:req.query.number
    }

    res.render('tablas.html', valores);
})

router.post("/tablas", (req, res)=>{
    const valores ={
        tabla:req.body.tabla
    }

    res.render('tablas.html', valores);
})

//Cotizacion
router.get("/cotizacion", (req, res)=>{
    const valores ={
        valor:req.query.valor,
        pInicial:req.query.pInicial,
        plazos:req.query.plazos
    }

    res.render('cotizacion.html', valores)
})

router.post("/cotizacion", (req, res)=>{
    const valores ={
        valor:req.body.valor,
        pInicial:req.body.pInicial,
        plazos:req.body.plazos
    }

    res.render('cotizacion.html', valores)
})

module.exports = router;