import logo from "./logo.svg";
import "./App.css";
import Hello, * as calculator from "./hello";
import React from "react";
import { multiply, add } from "./testi";

function App() {
  const paivays = new Date();
  var tunti = paivays.getHours();
  var tervehdys = "";
  var minuutit = paivays.getMinutes();
  const img = "https://www.picsum.photos/400";

  const cStyle = {
    color: "blue",
  };
  var testf = multiply(3, 4);

  if (tunti < 12 && tunti >= 5) {
    tervehdys = "🌻 Good Morning 🌻";
    cStyle.color = "yellow";
  } else if (tunti >= 12 && tunti < 20) {
    tervehdys = "🌄 Good afternoon 🌄";
    cStyle.color = "green";
  } else {
    tervehdys = "🌙 Good night 🌙";
    cStyle.color = "blue";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={cStyle}>{tervehdys}</h2>
        Its about {tunti}:{minuutit}
        <p>
          And I made this {multiply(calculator.luku, 3)} also{" "}
          {calculator.taulukko.length} and {calculator.add(3, 4)}
        </p>
        <img src={img} alt="kuvia menneisyydestä" />
        <Hello />
        <span
          class="hovertext"
          data-hover={`${"Oikea numero oli: "} ${Math.floor(
            Math.random() * 10
          )}`}
        >
          <h2> Arvaa random luku 0 ja 10 väliltä</h2>
        </span>
      </header>
    </div>
  );
}

export default App;
