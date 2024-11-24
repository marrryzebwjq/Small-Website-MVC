// implementation class
class CounterModel extends Observable {

    constructor() {
        super()
        //création d'un int compteur pour la modification du compteur affiché
        this.compteur = 0;
        this.disabledplus = false;
        this.disabledminus = false;
    }

    //plus()
    plus() {
        //incrémentation du compteur
        this.compteur++
        //(des)activation des boutons + et -
        if (this.compteur<10)
            this.disabledminus = false
        else
            this.disabledplus = true
        //notification des changements
        this.setChanged()
        this.notifyObservers()
        console.log("plus disabled = " + this.disabledplus)
        console.log("minus disabled = " + this.disabledminus)
        console.log("compteur ++ : " + this.compteur)
    }
    //minus()
    minus() {
        this.compteur--
        if (this.compteur>0)
            this.disabledplus = false
        else
            this.disabledminus = true
        this.setChanged()
        this.notifyObservers()
        console.log("plus disabled = " + this.disabledplus)
        console.log("minus disabled = " + this.disabledminus)
        console.log("compteur -- : " + this.compteur)
    }

}
