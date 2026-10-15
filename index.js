const express = require('express'); // O "import express from 'express';" si usas ESM
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('hola mundo desde express');
});

// Ruta de prueba adicional
app.get('/api/test', (req, res) => {
  res.json({ ok: true, mensaje: "Funcionando correctamente" });
});

// Condición para que siga funcionando localmente con node --watch
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor local en http://localhost:${PORT}`);
  });
}

// ESTA LÍNEA ES CRUCIAL PARA LA DETECCIÓN AUTOMÁTICA
module.exports = app; 
