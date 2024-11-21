class UpdateTxt extends Observer {

    constructor(view){
        super();
        this.view = view;
    }

    update(observable, object){
        this.view.input.value = observable.x;
    }
}

class UpdateDisable extends Observer {

    constructor(view){
        super();
        this.view = view;
    }

    update(observable, object){
        this.view.buttonPlus.disabled = observable.x == Model.MAX;
        this.view.buttonMinus.disabled = observable.x == Model.MIN;
    }
}

class Controller {

    constructor(model){

        this.view = new View();
        this.model = model;

        // update

        let updateTxt  = new UpdateTxt(this.view);
        this.model.addObservers(updateTxt);

        let updadeDisable = new UpdateDisable(this.view);
        this.model.addObservers(updadeDisable);

        //  action
        let actionPlus = (event) => {
            this.model.plus();
        }

        let actionMinus = (event) => {
            this.model.minus();
        }

        this.view.buttonPlus.addEventListener('click', actionPlus);
        this.view.buttonMinus.addEventListener('click', actionMinus);

        // permet de lancer une fois les observer pour initialiser la vue
        this.model.setValue(0);

    }
}
