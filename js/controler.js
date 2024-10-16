

class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      // update

      

      // action

      //quand on clique sur les boutons, ça appelle une fonction du modele
      this.view.buttonplus.addEventListener('click', (event) => model.plus())
      
  }
}

//création d'un observer
class UpdateText extends Observer {

}
