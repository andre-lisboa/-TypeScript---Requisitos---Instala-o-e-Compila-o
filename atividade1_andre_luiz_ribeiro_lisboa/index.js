"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Para importar no padrão Common.JS
//declare function require(name:string):any;
//const input = require('readline-sync');
//Ou
//import input = require('readline-sync');
//Padrão de importação ES6
var input = require("readline-sync");
//----------------------------------------------------
var nome = input.question('Digite o nome:');
var idade;
idade = parseInt(input.question('Digite a idade:'));
//-----------------------------------------------------
console.log('Olá mundo de DEVs!!!');
console.log('O nome digitado foi:', nome);
console.log('A idade digitada foi:', idade);
