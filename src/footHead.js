

function createHeader()
{
  const headArray=['Home','Contact','Menu']
    const header=document.createElement('header');
    for(let i=0;i<=2;i++)
    {
        let ase=document.createElement('p');
        ase.dataset.index=i;
        ase.textContent=headArray[i]
       header.appendChild(ase);    
    }
  return header;
}

function createFooter()
{
    const footer=document.createElement('footer');
    footer.textContent="Odin project";
    return footer;
}



export {createHeader,createFooter,};
