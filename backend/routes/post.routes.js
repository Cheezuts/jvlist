const express = require(`express`);
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});

router.post("/", (req, res) => {
  res.json({ message: "Hey la request POST fonctionne !" });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id : " + req.params.id });
});

module.exports = router;
