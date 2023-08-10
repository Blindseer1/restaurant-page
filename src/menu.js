

let Burger=function createBurger(picture,price,title)
{
    let newBurger=document.createElement('div');

    let newImage=document.createElement('img');
     newImage=picture;
     newImage.classList.add('burgerimg')

     let newTitle=document.createElement('h4');
     newTitle.textContent=title;
     newTitle.classList.add('title');


     let newPrice=document.createElement('p')

   newPrice.textContent="Price: "+ price + " dollars";


    newBurger.appendChild(newImage);
    newBurger.appendChild(newTitle)
   newBurger.appendChild(newPrice)
    newBurger.classList.add('burger');

     
    const getBurger=()=>{return newBurger;}
    return{getBurger}        
    }
 
    import blue from '../burgers/blue-burg.jpg';
    import red from '../burgers/red-burg.jpeg';
    import pink from '../burgers/pink-burg.jpeg';
    import normal from "../burgers/the-burg.jpg";
let blueBurg=Burger(blue,"20","Blue Burger");
let redBurg=Burger(red,'20',"Red Burger");
let pinkBurg=Burger(pink,'40',"Pink Burger");
let theBurg=Burger(normal,"100","The Burger");


function createMenu()
{
    const container=document.createElement('div');
    container.classList.add('containerMenu')
    const menu=document.createElement('div');
    menu.classList.add("menu");
    console.log(blueBurg.getBurger())
    menu.appendChild(blueBurg.getBurger())
    menu.appendChild(redBurg.getBurger())
    menu.appendChild(pinkBurg.getBurger())
    menu.appendChild(theBurg.getBurger())
    container.appendChild(menu)
    return container;
}

export{createMenu}
