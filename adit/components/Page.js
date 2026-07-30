import { Component } from "./Component.js";
import { Navbar } from "./Navbar.js";
import { Footer } from "./Footer.js";
 
export class Page extends Component {
  render() {
    const navbar = new Navbar({ activePage: this.props.activePage }).render();
    const footer = new Footer().render();
    return `
    ${navbar}
    ${this.renderContent()}
    ${footer}`;
  }

  renderContent() {
    throw new Error("Method renderContent() harus diimplementasikan oleh halaman turunannya!");
  }
}
