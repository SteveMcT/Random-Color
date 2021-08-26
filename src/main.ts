import tinycolor, { Instance } from "tinycolor2";
import "./styles/style.scss";

let showHeader = true;

const background = document.getElementById("background")!;
const title = document.getElementById("header")!;
const copied = document.getElementById("copied")!;
const color = document.getElementById("color")! as HTMLElement;

background.onclick = () => {
  generateColor();
};

color.onclick = () => {
  copied.style.display = "none";
  copied.style.display = "block";

  navigator.clipboard.writeText("#" + color.innerHTML);

  setTimeout(() => {
    copied.style.display = "none";
  }, 900);
};

document.addEventListener("keydown", (ev) => {
  if (ev.key == " ") generateColor();
});

function generateColor() {
  if (showHeader) {
    title.style.display = "none";
    showHeader = false;
    color.style.display = "block";
  }

  let hexColor: string | Instance = "#" + Math.floor(Math.random() * 16777215).toString(16);

  while (hexColor.length < 7) {
    hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  background.style.background = hexColor;
  console.log(hexColor);

  hexColor = tinycolor(hexColor);

  console.log(hexColor);

  color.style.color = hexColor.isDark() ? "#fff" : "#000";
  color.innerHTML = hexColor.toHex();
}
