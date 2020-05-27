import express from "express";
import BaseController from "../utils/BaseController";
import { studentsService } from "../services/StudentsService";
import { submissionsService } from "../services/SubmissionsService";


export class StudentsController extends BaseController {
    constructor() {
        super("api/students");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/submissions", this.getSubmissionsByStudentId)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await studentsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await studentsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getSubmissionsByStudentId(req, res, next) {
        try {
            let data = await submissionsService.find({ student: req.params.id })
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await studentsService.create(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await studentsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await studentsService.delete(req.params.id)
            return res.send("Deleted")
        } catch (error) {
            next(error);
        }
    }
}
