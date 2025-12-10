# Web Components

_A simple introduction to building native Web Components_

[![Node.js](https://img.shields.io/badge/Node.js->=20-3c873a?style=flat-square)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

A minimal, dependency-free project demonstrating how to build custom Web Components using vanilla JavaScript. Perfect for learning the fundamentals of Web Components without the complexity of frameworks.

## Overview

This project showcases the basics of creating reusable, encapsulated custom HTML elements using the Web Components standard. It includes a simple example component (`<big-bang>`) that demonstrates the core concepts of custom elements and Shadow DOM.

Web Components are a set of web platform APIs that allow you to create custom, reusable, encapsulated HTML tags to use in web pages and web applications. They work across modern browsers and can be used with any JavaScript framework or library.

## Features

- **Zero Dependencies** - Built with vanilla JavaScript and native Web Components APIs
- **Shadow DOM** - Demonstrates component encapsulation and style isolation
- **Custom Elements** - Shows how to define and register custom HTML elements
- **Module Support** - Uses ES6 modules for clean, modern JavaScript
- **Simple Setup** - Just HTML, CSS, and JavaScript - no build tools required

## Getting Started

### Prerequisites

To view this project, you'll need:

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x (for running the local development server)

### Running the Project

Since the project uses ES6 modules, you need to serve it through a web server rather than opening the HTML file directly. This avoids CORS issues with module loading.

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd web-components
   ```

2. **Start a local web server:**

   ```bash
   python -m http.server 8000
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:8000
   ```

> [!TIP]
> Alternatively, you can use any static file server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, or Node.js with `npx http-server`.

## Project Structure

```
web-components/
├── index.html          # Main HTML page
├── main.js             # Main JavaScript entry point
├── main.css            # Stylesheet (currently empty)
├── bigbang.js          # Example Web Component definition
└── README.md           # This file
```

## Example Component

The project includes a simple `BigBang` component that demonstrates the basic structure of a Web Component:

```javascript
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
```

To use it in your HTML:

```html
<big-bang></big-bang>
```

## Key Concepts

### Custom Elements

Custom elements allow you to define your own HTML tags with custom behavior. They must:

- Have a hyphen in their name (e.g., `big-bang`, `my-component`)
- Extend `HTMLElement` or another HTML element
- Be registered using `customElements.define()`

### Shadow DOM

The Shadow DOM provides encapsulation for your component's internal structure and styling:

- `mode: "closed"` - Prevents external JavaScript from accessing the shadow root
- `mode: "open"` - Allows external JavaScript to access the shadow root via `element.shadowRoot`

### ES6 Modules

The project uses ES6 modules (`type="module"`) for clean code organization and automatic strict mode.

## Next Steps

Want to extend this project? Here are some ideas:

- Add styling to the component using Shadow DOM styles
- Create components with attributes and properties
- Implement lifecycle callbacks (connectedCallback, disconnectedCallback, etc.)
- Build components that accept and render child content using `<slot>`
- Add event handling and custom events
- Create more complex, reusable UI components

## Resources

Learn more about Web Components:

- [MDN Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements Specification](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Shadow DOM Specification](https://dom.spec.whatwg.org/#shadow-trees)
- [Web Components Examples](https://www.webcomponents.org/)

## Browser Support

Web Components are supported in all modern browsers:

- Chrome/Edge (Chromium) 54+
- Firefox 63+
- Safari 10.1+
- Opera 41+

For older browsers, you may need [polyfills](https://github.com/webcomponents/polyfills).
