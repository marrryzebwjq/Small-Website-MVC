
//création des observers
class UpdateCount extends Observer {

    constructor(view) {
        super()
        this.view = view
    }
    update(observable, object) {
        this.view.count.textContent = observable.compteur
        this.view.buttonminus.disabled = observable.disabledminus
        this.view.buttonplus.disabled  = observable.disabledplus
    }
}
