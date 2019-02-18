const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  if (!Number(base) || !Number(limite)) {
    throw "Verifique los valores";
  }
  let data = "";
  console.log("==================".green);
  console.log((" ==Tabla del "+base+"==").red);
  console.log("==================".yellow);
  for (let i = 0; i < limite; i++) {
    data += base + " * " + (i + 1) + " = " + base * (i + 1) + "\n";
  }
  console.log(data.rainbow);
};

let crearArchivo = async (base, limite) => {
  if (!Number(base) || !Number(limite)) {
    throw "Verifique los valores";
  }
  let data = "";
  for (let i = 0; i < limite; i++) {
    data += base + " * " + (i + 1) + " = " + base * (i + 1) + "\n";
  }

  await fs.writeFile("tabla-" + base + ".txt", data, err => {
    if (err) throw err;
  });
  return "tabla-" + base + ".txt";
};

module.exports = { crearArchivo, listarTabla };
