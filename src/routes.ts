import express from "express";
const routes = express.Router();
import OrphanagesController from "./controllers/orphanagesController";
routes.post("/orphanages", OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.detail);

export default routes;
