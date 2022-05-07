 //recuperer le bouton
 const monbouton=document.getElementById("bouton");
 //recuperer bouton save
 const btsave=document.getElementById("save");
//recuperer le div
const mydiv=document.getElementById("divliste");
//recuperer le input
const moninput=document.getElementById("input"); 
//recuperer le bouton clear all
const reset=document.getElementById("reset");
//recuperer la liste
const liste=document.getElementById("liste");
var i=0;
monbouton.addEventListener("click",function()
{ 
if(moninput.value=="")
    {
        alert("veuillez entre une tache avant de l'ajouter");
    }
    else
    {
    mydiv.className="list-wrapper";
    //creer le div
    var divelem=document.createElement("div");
    divelem.id="divelem"
    divelem.classList.add("to-do");


    //creer le input chechbox
    var check=document.createElement("input");
    check.class="custom-control-input"
    check.type="checkbox"
    check.checked=""
    check.addEventListener('change',cocher)
    


    //creer un element
    var elementliste=document.createElement("li");
    elementliste.id="elem";
    elementliste.textContent=moninput.value;
    elementliste.classList.add("todo-item");

    //boutons editer 
    var editer=document.createElement("button")
    editer.type="button"
    editer.innerHTML='<i class="fas fa-edit"></i>'
    editer.className="editer"
    editer.id="editer"
    editer.classList.add("editer");
    editer.addEventListener("click",modifier)
    //bouton ecraser
    var ecraser=document.createElement("button")
    ecraser.type="button"
    ecraser.innerHTML='<i class="fas fa-trash"></i>'
    ecraser.id="ecraser"
    ecraser.className="ecraser"
    ecraser.classList.add('ecraser');
    ecraser.addEventListener("click",supprimer)
    
    
    liste.append(divelem);
    divelem.append(check);
    divelem.append(elementliste);
    divelem.append(editer);
    divelem.append(ecraser);
    moninput.value="";
    i++;
    }

})

function cocher(){
    //supprimer le parent du bouton de son parent
    if(this.checked==true)
    {
    this.parentNode.style.textDecoration="line-through";
    }
    else
    {
        this.parentNode.style.textDecoration="none";
    }
  }



function supprimer()
{
    this.parentNode.remove(this.parentNode.parentNode);
    i--;
    if(i==0)
    {
        mydiv.className=""
    }
    moninput.value=""
}


//tableau pour stocker tous les children d'un element de la liste
var tableau=[]

function modifier()
{ 

    tableau=this.parentNode.children
    moninput.value=tableau[1].textContent//element de la liste
    monbouton.style.display='none'
    btsave.style.display='block'
    btsave.addEventListener('click',enregistrer)
}

function enregistrer()
{
    
    tableau[1].textContent=moninput.value
    btsave.style.display='none'
    monbouton.style.display='block'
}


reset.addEventListener('click',
function deleteall()
{
    liste.textContent=""
    mydiv.classList=""
    i=0;
})