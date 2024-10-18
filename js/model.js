// implementation class
class Model extends Observable {

    constructor() {
        super()
        //création d'un int compteur pour la modification du compteur affiché
        this.compteur = 0;
    }

    //plus()
    plus() {
        if (this.compteur<10) {
            this.compteur++
            this.setChanged()
            this.notifyObservers()
        }
        console.log("compteur ++ : " + this.compteur)
    }
    //minus()
    minus() {
        if (this.compteur>0) {
            this.compteur--
            this.setChanged()
            this.notifyObservers()
        }
        console.log("compteur -- : " + this.compteur)
    }

}
