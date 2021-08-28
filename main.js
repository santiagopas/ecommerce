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
        <div class="container w-50">
        <div class="row">
          <div class="card-deck">
            <div class="card text-center col-sm">
              <img class="card-img-top foto align-self-center" width="12" src="${this.src}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${this.titulo}</h5>
                <p class="card-text">${this.sub}</p>
              </div>
              <div class="card-footer bg-white">
                <h6 class="text-muted">${this.precio}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        // this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("tarjeta-comp", cardC);