import express from "express";
import BaseController from "../utils/BaseController";
import { submissionsService } from "../services/SubmissionsService";


export class SubmissionsController extends BaseController {
    constructor() {
        super("api/submissions");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await submissionsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await submissionsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await submissionsService.create(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await submissionsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await submissionsService.delete(req.params.id)
            return res.send("Deleted")
        } catch (error) {
            next(error);
        }
    }
}
