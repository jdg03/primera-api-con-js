// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const bd:string = 'pokedex';
const port:string = '27017';
const host:string = 'localhost';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb://${host}:${port}/${bd}`) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}
