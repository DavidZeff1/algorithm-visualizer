import ArrayContainer from "./components/ArrayContainer/ArrayContainer";
import SwapAnimation from "./animations/swap";

const app = document.getElementById("app");

app.innerHTML = `${ArrayContainer()}`;

setTimeout(() => SwapAnimation(0, 3), 2000);
