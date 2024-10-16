
class Controller {

  constructor(model){

      this.view = new View();
      this.model = model;

      // update : ajout d'un observer
      let updateCount = new UpdateCount(this.view);
      this.model.addObservers(updateCount);


      // action
      //quand on clique sur les boutons, ça appelle une fonction du modele
      this.view.buttonplus.addEventListener('click', (event) => model.plus())
      
  }
}

//création des observers
class UpdateCount extends Observer {

    constructor(view) {
        super()
        this.view = view
    }
    update(observable, object) {
        this.view.count.placeholder = observable.compteur
    }
}
