/* Fuente limpia y fondo */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f3f4f6;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Contenedor central */
.container {
  flex: 1;
  text-align: center;
  padding: 30px;
}

/* Tarjeta de formulario */
.card {
  background: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

label {
  display: block;
  text-align: left;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Botones */
.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: none;
  background: #2563eb;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #1e40af;
}

/* Resultado */
#resultado {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
  color: #16a34a;
}

/* Footer */
footer {
  background: #111827;
  color: #d1d5db;
  text-align: center;
  padding: 15px;
  font-size: 0.9em;
  margin-top: auto;
}
