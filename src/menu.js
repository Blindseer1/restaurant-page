

let Burger=function createBurger(picture,price,title)
{
    let newBurger=document.createElement('div');

    let newImage=document.createElement('img');
     newImage.src=picture;
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

let blueBurg=Burger('../burgers/blue-burg.jpg',"20","Blue Burger");
let redBurg=Burger('../burgers/red-burg.jpeg','20',"Red Burger");
let pinkBurg=Burger('../burgers/pink-burg.jpeg','40',"Pink Burger");
let theBurg=Burger("../burgers/the-burg.jpg","100","The Burger");


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
