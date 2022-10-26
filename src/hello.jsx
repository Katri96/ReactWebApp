import React from "react";

var taulukko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const luku = 6;
for (var i = 0; i < 10; i++) {
  taulukko[i] += 3;
}
function add(x, y) {
  return x + y;
}

function Hello() {
  return (
    <div>
      <h3>And welcome to React.js page!</h3>
    </div>
  );
}

export default Hello;
export { taulukko, luku, add };
