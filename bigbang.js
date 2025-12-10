class BigBang extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "closed" });
    let div = document.createElement("div");
    div.textContent = "Big Bang Theory";
    shadowRoot.appendChild(div);
  }
}

customElements.define("big-bang", BigBang);
