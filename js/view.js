
class View {

  constructor(){

    this.div = document.createElement('div');



    //creer un bouton ici puis appendchild

    this.buttonplus = document.createElement('button');
    this.buttonminus = document.createElement('button');
    this.input = document.createElement('input');


    this.buttonplus.innerHTML="+";
    this.buttonminus.innerHTML="-";
    this.input.disabled = true;
    this.input.placeholder = 0;

    //this.div.appendChild();

    this.div.appendChild(this.buttonminus);
    this.div.appendChild(this.input);
    this.div.appendChild(this.buttonplus);


    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
