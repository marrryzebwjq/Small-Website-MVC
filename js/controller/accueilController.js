
class AccueilController {

  constructor(model){
      this.view = new CounterView();
      this.model = model;

      // update : ajout d'un observer
      let updateAccueil = new UpdateAccueil(this.view);
      this.model.addObservers(updateAccueil);

      // actions
      //this.view.buttonplus.addEventListener('click', (event) => model.plus())
      this.view.buttonminus.addEventListener('click', (event) => model.minus())

  }
}
