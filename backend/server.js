const express = require("express");
const port = 5000;

const app = express();

app.use("/post", require("./routes/post.routes"));
// Middleware qui permet de traiter les données de la Request

app.use(express.json.apply());
app.use(express.urlencoded({ extended: false }));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
