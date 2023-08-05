function createMascot()
{
   
    let mascot=document.createElement('img')
    mascot.src="../theMan";
    return mascot;
}
function createHomePage()
{
    let newContent=document.createElement('div')
    newContent.classList.add('home');
    newContent.appendChild(createMascot());
    return newContent;
}

export {createHomePage};
