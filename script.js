function calcular() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const produto = document.getElementById("produto").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(quantidade) || quantidade <= 0) {
      resultado.innerHTML = "<p style='color: red;'>Digite uma quantidade válida.</p>";
      return;
    }
  
    let ingredientes = "";
    if (produto === "pao") {
      const farinha = (quantidade * 6000) / 100;
      const agua = (quantidade * 3600) / 100;
      const fermento = (quantidade * 200) / 100;
      const sal = (quantidade * 120) / 100;
  
      ingredientes = `
        <li>Farinha: ${(farinha / 1000).toFixed(2)} kg</li>
        <li>Água: ${(agua / 1000).toFixed(2)} litros</li>
        <li>Fermento: ${fermento.toFixed(0)} g</li>
        <li>Sal: ${sal.toFixed(0)} g</li>
      `;
    } else if (produto === "leite") {
      const farinha = (quantidade * 6000) / 100;
      const leite = (quantidade * 4000) / 100;
      const acucar = (quantidade * 800) / 100;
      const fermento = (quantidade * 200) / 100;
      const manteiga = (quantidade * 400) / 100;
  
      ingredientes = `
        <li>Farinha: ${(farinha / 1000).toFixed(2)} kg</li>
        <li>Leite: ${(leite / 1000).toFixed(2)} litros</li>
        <li>Açúcar: ${acucar.toFixed(0)} g</li>
        <li>Fermento: ${fermento.toFixed(0)} g</li>
        <li>Manteiga: ${manteiga.toFixed(0)} g</li>
      `;
    } else if (produto === "coco") {
      const farinha = (quantidade * 5000) / 100;
      const leiteCoco = (quantidade * 2000) / 100;
      const acucar = (quantidade * 1000) / 100;
      const coco = (quantidade * 500) / 100;
      const fermento = (quantidade * 150) / 100;
      const manteiga = (quantidade * 300) / 100;
  
      ingredientes = `
        <li>Farinha: ${(farinha / 1000).toFixed(2)} kg</li>
        <li>Leite de Coco: ${(leiteCoco / 1000).toFixed(2)} litros</li>
        <li>Açúcar: ${acucar.toFixed(0)} g</li>
        <li>Coco Ralado: ${coco.toFixed(0)} g</li>
        <li>Fermento: ${fermento.toFixed(0)} g</li>
        <li>Manteiga: ${manteiga.toFixed(0)} g</li>
      `;
    }
  
    resultado.innerHTML = `
      <h2>Ingredientes para ${quantidade} unidades:</h2>
      <ul>${ingredientes}</ul>
    `;
  }
  