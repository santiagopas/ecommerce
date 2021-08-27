class holaMundo extends HTMLElement{
  constructor(){
      super();
      this.name;
      this.surname;
  }

  static get observedAttributes(){
      return ['name', "surname"];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue){
      switch(nameAttr){
          case "name":
              this.name = newValue;
          break;
          case "surname":
              this.surname = newValue;
          break;
      }
  }

  connectedCallback(){
      this.innerHTML = `
      <div class="container">
      <div class="caja">
      <img src="https://miro.medium.com/max/1400/1*pdPTFvogzT9vzmc7k-qY2Q.jpeg" width="400" alt="foto"/>
          <h1>Hola ${this.name} ${this.surname}</h1>
          <p>Esto es un párrafo</p>
      </div>
      </div>
      `;
      this.style.color = "blue";
      this.style.fontFamily = "sans-serif";
  }
}

window.customElements.define("hola-mundo", holaMundo);