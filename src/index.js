import { createContact } from "./contact";
import { createHeader,createFooter} from "./footHead"
import { createHomePage } from "./home";
import { createMenu } from "./menu";
function emptyContent()
{
    content.textContent="";
}

const body=document.querySelector('body');
const content=document.querySelector('#content');

body.appendChild(createHeader())
body.appendChild(createFooter())

const home=document.querySelector('[data-index="0"]');
home.addEventListener('click',()=>
{
    emptyContent()
    content.appendChild(createHomePage())
}
)

const menu=document.querySelector('[data-index="1"]');
menu.addEventListener('click',()=>
{
    emptyContent()
    content.appendChild(createMenu())
}
)


const contact=document.querySelector('[data-index="2"]');
contact.addEventListener('click',()=>
{
    emptyContent()
    content.appendChild(createContact())
}





)
console.log('I am working')
