function createMascot()
{
   
    let mascot=document.createElement('img')
    mascot.src="../theMan";
    mascot.classList.add('mascot');
    return mascot;
}

function createText()
{
    let element=document.createElement('p');
    element.classList.add('textContainer');
    element.textContent="The Number One Burgers Fast-Food";
    return element;
}

function createHomePage()
{
    let newContent=document.createElement('div')
    newContent.classList.add('home');
    newContent.appendChild(createMascot());
    newContent.appendChild(createText())
    return newContent;
}

export {createHomePage};
