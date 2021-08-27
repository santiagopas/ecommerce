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
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${this.src}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.titulo}</h5>
                <p class="card-text">${this.sub}</p>
                <a href="#" class="btn btn-primary">Ver</a>
            </div>
        </div>
        `;
        this.style.color = "null";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("tarjeta-comp", cardC);