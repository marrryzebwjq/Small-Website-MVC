
class View {

  constructor(){

    this.div = document.createElement('div');

    this.div.innerHTML = `
      <div class='row mt-4'>
        <div class="col-3"></div>
        <div class="col-2 d-flex justify-content-end">
          <button id="buttonPlus" class="btn btn-light border ">+</button>
        </div>
        <div class="col-2">
          <input type="text" id="input" class="form-control" value="0" disabled>
        </div>
        <div class="col-2 justify-content-start">
          <button id="buttonMinus" class="btn btn-light border">-</button>
        </div>
        <div class="col-3"></div>
      </div>
    `;

    this.buttonPlus = this.div.querySelector('#buttonPlus');
    this.buttonMinus = this.div.querySelector('#buttonMinus');
    this.input = this.div.querySelector('#input');

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
