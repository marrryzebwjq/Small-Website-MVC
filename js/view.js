
class View {

  constructor(){

    this.div = document.createElement('div');

    //creation des elements
    this.buttonplus = document.createElement('button');
    this.buttonminus = document.createElement('button');
    this.count = document.createElement('span');


    // init
    this.buttonplus.innerHTML = "+";
    this.buttonminus.innerHTML = "-";
    this.buttonminus.disabled = true

    this.count.textContent = 0;

    //ajout dans la div
    this.div.appendChild(this.buttonminus);
    this.div.appendChild(this.count);
    this.div.appendChild(this.buttonplus);


    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
