
class CounterView {

  constructor(){

    let maincounterdiv = document.querySelector('#counter'); // [-] 0 [+] parent

    this.buttonminus = document.createElement('button');            // creation element
    maincounterdiv.appendChild(this.buttonminus);                           // ajout dans la div

    this.buttonminus.className = "btn btn-warning round-border"              // style
    this.buttonminus.innerHTML = "-";                                        // init
    this.buttonminus.disabled = true

    this.count = document.createElement('span'); // 0
    maincounterdiv.appendChild(this.count);
    this.count.className = "mx-3"
    this.count.textContent = "0";

    this.buttonplus = document.createElement('button'); // [+]
    maincounterdiv.appendChild(this.buttonplus);
    this.buttonplus.className = "btn btn-warning round-border"
    this.buttonplus.innerHTML = "+";

  }
}
