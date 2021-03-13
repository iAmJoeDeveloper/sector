var buttons = document.querySelectorAll(".btn-slider");
var links = document.querySelectorAll(".jumbotron__list--link");


const cuandoClick = function(){
  console.log("Click");
  deleteClass();
  this.classList.add("active");

  findIndex();
}

const clickLink = function(){
  console.log("click link");
  deleteClass();
  this.classList.add("linkActive");

  findButton();
}

const deleteClass = function(){
  console.log('Deleting...');
  buttons.forEach(button => {
    button.classList.remove("active");
  })

  links.forEach(link => {
    link.classList.remove("linkActive");
  })
}

const findIndex = function(){
  for (var i = 0; i < buttons.length; i++){
    if(buttons[i].classList.contains('active')){
      console.log('La posicion es: '+ i);
      links[i].classList.add("linkActive");
    }else{

    }
  }
}

const findButton = function(){
  for(var i = 0; i < links.length; i++){
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