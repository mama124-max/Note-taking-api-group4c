const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const notesRoutes = require("./routes/notes");
app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Note-Taking API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});