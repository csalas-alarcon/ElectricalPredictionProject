document.getElementById('predictBtn').addEventListener('click', () => {
    const days = document.getElementById('days').value;
    const building = document.getElementById('building').value;
  
    // Simulación de acción al hacer clic en el botón (sin predicción real)
    document.getElementById('result').textContent = `¡Has elegido predecir el consumo para el edificio "${building}" durante ${days} días!`;
  });
  