import { createHeader,createFooter } from "./home"

const content=document.querySelector('#content');

content.appendChild(createHeader())
content.appendChild(createFooter())

console.log('I am working')
