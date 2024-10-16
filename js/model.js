

// implementation class

class Model extends Observable {

    //constructeur
    constructor() {
        super()

        //création d'un int compteur pour les boutons
        this.compteur = 0;

        
    }




    //plus()
    plus() {
        this.compteur++
        this.setChanged()
        this.notifyObservers()

        console.log("compteur ++")
    }

    //minus()

}
