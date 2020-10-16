import { getRepository, Repository, getConnection } from "typeorm";
import { Orphanage } from "../models/Orphanage";
import { Request, Response } from "express";
class OrphanagesController {
  async detail(request: Request, response: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);
    try {
      const orphanage = await orphanagesRepository.findOneOrFail(id);
      return response.status(200).json(orphanage);
    } catch (error) {
      return response.status(404).json({
        message: "Orphanage not found",
      });
    }
  }
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find();
    return response.status(200).json(orphanages);
  }
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create(request.body);
    await orphanagesRepository.save(orphanage);
    return response.status(201).json(orphanage);
  }
}

export default new OrphanagesController();
