function createContact()
{
   let newContent=document.createElement('div');
   newContent.classList.add('contact');
   newContent.appendChild(createAnimeGirl());
   newContent.appendChild(createInfo())
   console.log('working')
   return newContent;
}

function createAnimeGirl()
{
    const myImage=document.createElement('img');
    myImage.src="../images.jpeg";
    myImage.classList.add('pose')
    return myImage;
}

function createInfo()
{
    const gray=document.createElement('div');
    gray.classList.add('gray');


    let b=document.createElement('p')
    b.textContent="Contact us!";

    

     let a=document.createElement('div');
     
     const timeTable=document.createElement('p');
     timeTable.textContent="Timetable";

    let containerDiv=document.createElement('div')
    let firstDiv=document.createElement('div');
   
    let monfri=document.createElement('p');
    monfri.textContent="Monday-Friday";
    firstDiv.appendChild(monfri);

    let firstHours=document.createElement('p');
    firstHours.textContent="10 AM - 10 PM"
    firstDiv.appendChild(firstHours)
    containerDiv.appendChild(firstDiv)
    let secondDiv=document.createElement('div');

    let satsun=document.createElement('p');
    satsun.textContent="Saturday - Sunday";
    secondDiv.appendChild(satsun);

    let secondHours=document.createElement('p');
    secondHours.textContent="10 AM - 12 AM"
    secondDiv.appendChild(secondHours);
    containerDiv.appendChild(secondDiv)

    
    let adress=document.createElement('p')
    adress.textContent="Adress";

    let c=document.createElement('div');
    let street=document.createElement('p')
    street.textContent="Fake Street nr 21";
    c.appendChild(street)



     a.appendChild(timeTable);
     a.appendChild(containerDiv)
     a.appendChild(adress)
     a.appendChild(c)

    gray.appendChild(b)
    gray.appendChild(a)
    

    return gray;
}
export {createContact};
