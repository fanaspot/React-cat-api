const express = require("express");
const api = require("./api");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example  listening at http://localhost:${port}`);
});

app.post("/api/images/search", async (req, res) => {
  const response = await api.get("/images/search/", {
    params: req.body,
  });
  if (response) {
    res.send({
      photos: response.data,
      paginationCount: +response.headers["pagination-count"],
    });
  } else {
    res.status(500).send("Что-то пошло не так");
  }
});

app.get("/api/categories", async (req, res) => {
  const response = await api.get(`/categories`);
  if (response) {
    res.send(response.data);
  } else {
    res.status(500).send("Что-то пошло не так");
  }
});

app.get("/api/breeds", async (req, res) => {
  const response = await api.get(`/breeds`);
  if (response) {
    res.send(response.data);
  } else {
    res.status(500).send("Что-то пошло не так");
  }
});
