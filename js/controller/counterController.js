
class CounterController {

  constructor(model){
      this.view = new CounterView();
      this.model = model;

      // update : ajout d'un observer
      let updateCount = new UpdateCount(this.view);
      this.model.addObservers(updateCount);

      // action
      //quand on clique sur les boutons, ça appelle une fonction du modele
      this.view.buttonplus.addEventListener('click', (event) => model.plus())
      this.view.buttonminus.addEventListener('click', (event) => model.minus())

  }
}
