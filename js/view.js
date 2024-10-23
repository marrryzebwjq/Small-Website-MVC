
class View {

  constructor(){

    let buttonm = document.querySelector('#button-m'); // [-] parent
    this.buttonminus = document.createElement('button');            // creation element
    buttonm.appendChild(this.buttonminus);                                  // ajout dans la div
    this.buttonminus.className = "btn btn-warning round-border"              // style
    this.buttonminus.innerHTML = "-";                                       // init
    this.buttonminus.disabled = true

    let ctext = document.querySelector('#c-text');     // 0
    this.count = document.createElement('span');
    ctext.appendChild(this.count);
    this.count.textContent = "0";

    let buttonp = document.querySelector('#button-p'); // [+]
    this.buttonplus = document.createElement('button');
    buttonp.appendChild(this.buttonplus);
    this.buttonplus.className = "btn btn-warning round-border"
    this.buttonplus.innerHTML = "+";

  }
}
