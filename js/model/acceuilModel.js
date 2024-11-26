// implementation class
class AcceuilModel extends Observable {

    constructor() {
        super()
        //création d'un int compteur pour la modification du compteur affiché
        this.compteur = 0;
        this.disabledminus = false;
    }

    //minus()
    minus() {
        this.compteur--

        this.disabledminus = true
        this.setChanged()
        this.notifyObservers()
        console.log("minus disabled = " + this.disabledminus)
        console.log("compteur -- : " + this.compteur)
    }

}
