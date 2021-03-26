const buttons = document.querySelectorAll(".btn-slider");
const links = document.querySelectorAll(".jumbotron__list--link");


function cuandoClick(){
  console.log("Click");
  deleteClass();
  this.classList.add("active");

  findIndex();
}


function clickLink(){
  console.log("click link");
  deleteClass();
  this.classList.add("linkActive");

  findButton();
}


function deleteClass(){
  console.log('Deleting...');
  buttons.forEach(button => {
    button.classList.remove("active");
  })

  links.forEach(link => {
    link.classList.remove("linkActive");
  })
}


function findIndex(){
  for (let i = 0; i < buttons.length; i++){
    if(buttons[i].classList.contains('active')){
      console.log('La posicion es: '+ i);
      links[i].classList.add("linkActive");
    }else{

    }
  }
}


function findButton(){
  for(let i = 0; i < links.length; i++){
    if(links[i].classList.contains('linkActive')){
      console.log('La posicion es: '+ i);
      buttons[i].classList.add('active');
    }
  }
}


buttons.forEach(button => {
  //Agregar Listener
  button.addEventListener("click", cuandoClick);
})

links.forEach(link => {
  //Agregar Listener
  link.addEventListener("click", clickLink);
})