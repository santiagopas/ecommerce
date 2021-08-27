class cardC extends HTMLElement {
    constructor() {
        super();
        this.titulo;
        this.sub;
        this.precio;
        this.src;

    }

    static get observedAttributes() {
        return ['titulo', "sub", "precio", "src"];
    }

    attributeChangedCallback(tituloAttr, oldValue, newValue) {
        switch (tituloAttr) {
            case "titulo":
                this.titulo = newValue;
                break;
            case "sub":
                this.sub = newValue;
                break;
            case "precio":
                this.precio = newValue;
                break;
            case "src":
                this.src = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="container">
      <div class="caja">
      <img src="${this.src}" width="400" alt="foto"/>
          <h1>${this.titulo}</h1>
          <p>Descripcion: ${this.sub}</p>
          <p>${this.precio}</p>
      </div>
      </div>
      `;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("tarjeta-comp", cardC);