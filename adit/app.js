import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { KontakPage } from "./pages/KontakPage.js";
 
const daftarHalaman = [
  new HomePage({ activePage: "home" }),
  new AboutPage({ activePage: "about" }),
  new KontakPage({ activePage: "kontak" }),
];
 
let hasil = "";
for (const halaman of daftarHalaman) {
  hasil += halaman.render();
}
document.getElementById("app").innerHTML = hasil;
