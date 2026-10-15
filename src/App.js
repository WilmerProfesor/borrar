// 1. inicializar npm: npm init-y
// 2. instalar express: npm i express
// 3. ir a la documentación de express y crear el server
// https://expressjs.com/es/

import express from "express";
// const express = require('express');

const data = [
    {
        "id": 1,
        "name": "Goku",
        "ki": "60",
        "maxKi": "90 Septillion",
        "race": "Saiyan",
        "gender": "Male",
        "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
        "image": "https://dragonball-api.com/characters/goku_normal.webp",
        "affiliation": "Z Fighter",
        "deletedAt": null
    },
    {
        "id": 2,
        "name": "Vegeta",
        "ki": "54",
        "maxKi": "19.84 Septillion",
        "race": "Saiyan",
        "gender": "Male",
        "description": "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
        "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
        "affiliation": "Z Fighter",
        "deletedAt": null
    },
    {
        "id": 3,
        "name": "Piccolo",
        "ki": "20",
        "maxKi": "500.000.000",
        "race": "Namekian",
        "gender": "Male",
        "description": "Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de \"vástago\" y formando un lazo de amistad con este.",
        "image": "https://dragonball-api.com/characters/picolo_normal.webp",
        "affiliation": "Z Fighter",
        "deletedAt": null
    },
    {
        "id": 4,
        "name": "Bulma",
        "ki": "10",
        "maxKi": "0",
        "race": "Human",
        "gender": "Female",
        "description": "Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es hija del Dr. Brief y su esposa Panchy, hermana menor de Tights y una gran amiga de Son Goku con quien inicia la búsqueda de las Esferas del Dragón. En Dragon Ball Z tuvo a Trunks, primogénito de quien sería su esposo Vegeta, a su hija Bra[3] y su hijo adulto del tiempo alterno Trunks del Futuro Alternativo.",
        "image": "https://dragonball-api.com/characters/bulma.webp",
        "affiliation": "Z Fighter",
        "deletedAt": null
    },
    {
        "id": 5,
        "name": "Freezer",
        "ki": "5",
        "maxKi": "52.71 Septillion",
        "race": "Frieza Race",
        "gender": "Male",
        "description": "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
        "image": "https://dragonball-api.com/characters/Freezer.webp",
        "affiliation": "Army of Frieza",
        "deletedAt": null
    }
]

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1 style="color: red">Hello World!</h1>')
})

app.get('/data', (req, res) => {
    res.send(data);    
})

app.get('/data/:id', (req, res) => {
    const id= req.params.id;
    const encontrado= data.find((character)=>character.id==id);
    if(encontrado){
        res.send(encontrado);    
    }else{
        res.send(`error: No se encontró un personaje con id: ${id}`);    
    }
})

app.get('/data/filtro/:gender/:ki', (req, res) => {    
    const {gender, ki}= req.params;        
    const encontrado= data.filter((character)=>character.gender==gender && Number(character.ki)> Number(ki));
    if(encontrado.length>0){
        res.send(encontrado);    
    }else{
        res.send(`error: No se encontraron personages con género: ${gender}`);    
    }
})

app.get('/data/queryexample', (req, res) => {    
    const {gender, ki}= req.query;        
    const encontrado= data.filter((character)=>character.gender==gender && Number(character.ki)> Number(ki));
    if(encontrado.length>0){
        res.send(encontrado);    
    }else{
        res.send(`error: No se encontraron personages con género: ${gender}`);    
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
    //   console.log(`Example app listening on port ${port}`)
})
