const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");


const app = express();
app.set('view engine', "ejs")
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));

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

app.get('/', (req, res)=>{
    //res.send("<h1>Iniciamos con express</h1>");
    res.render('index',{titulo: "Listado de alimnos", listado:datos})
})

//Tablas
app.get('/tablas', (req, res)=>{
    const valores ={
        tabla:req.query.number
    }

    res.render('tablas', valores);
})

app.post("/tablas", (req, res)=>{
    const valores ={
        tabla:req.body.tabla
    }

    res.render('tablas', valores);
})

//Cotizacion
app.get("/cotizacion", (req, res)=>{
    const valores ={
        valor:req.query.valor,
        pInicial:req.query.pInicial,
        plazos:req.query.plazos
    }

    res.render('cotizacion', valores)
})

app.post("/cotizacion", (req, res)=>{
    const valores ={
        valor:req.body.valor,
        pInicial:req.body.pInicial,
        plazos:req.body.plazos
    }

    res.render('cotizacion', valores)
})


// Escuchar al servidor por el puerto 3000
app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + '/public/error.html');
})
const puerto = 3003;
app.listen(puerto, ()=>{
    console.log("iniciando puerto 3003")
})