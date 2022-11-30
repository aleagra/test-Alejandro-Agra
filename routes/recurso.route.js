const express = require("express");
const routerrecuro = express.Router();
const {
  getRecurso,
  createRecurso,
} = require("../controllers/recursoController");

routerrecuro.get("/recurso/get", getRecurso);
routerrecuro.post("/recurso/post", createRecurso);

module.exports = routerrecuro;
