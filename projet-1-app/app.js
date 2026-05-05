const express = require('express');
const app = express();

app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({ message: "API DevOps Express 🚀" });
});

// Healthcheck (très utilisé en DevOps)
app.get('/health', (req, res) => {
  res.json({
    status: "UP",
    service: "devops-app",
    time: new Date().toISOString()
  });
});

// Exemple API métier
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

// Route 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Lancement serveur
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
