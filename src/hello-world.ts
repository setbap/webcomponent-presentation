class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p style="background:green">hello world</p>`;
  }
}
window.customElements.define('hello-world', HelloWorld);

document.getElementById('app').innerHTML = `
<p>Hello World: pure</>

`;

class HelloWorldWithShaodwAndCss extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    let style = document.createElement('style');
    let div = document.createElement('p');
    style.textContent = `
     p {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 4px solid black;
      padding: 10px;
     }
    `;
    div.innerHTML = `Hello World: Shadow with Css`;
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

class HelloWorldWithShadowAndWithoutCss extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    let p = document.createElement('p');
    p.innerHTML = `Hello World: Shadow without Css`;
    shadow.appendChild(p);
  }
}

class HelloWorldWithoutShaodwAndCss extends HTMLElement {
  constructor() {
    super();
    let p = document.createElement('p');
    p.innerHTML = `Hello World: without Shadow without Css`;
    this.appendChild(p);
  }
}

window.customElements.define('hello-world-1', HelloWorldWithShaodwAndCss);
window.customElements.define(
  'hello-world-2',
  HelloWorldWithShadowAndWithoutCss
);
window.customElements.define('hello-world-3', HelloWorldWithoutShaodwAndCss);
