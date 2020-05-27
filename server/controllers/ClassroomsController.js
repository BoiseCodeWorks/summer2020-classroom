import express from "express";
import BaseController from "../utils/BaseController";
import { classroomsService } from "../services/ClassroomsService";
import { studentsService } from "../services/StudentsService";
import { submissionsService } from "../services/SubmissionsService";


export class ClassroomsController extends BaseController {

    constructor() {
        super("api/classrooms");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/students", this.getStudentsByClassroomId)
            .get("/:id/submissions", this.getSubmissionsByClassroomId)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await classroomsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await classroomsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getStudentsByClassroomId(req, res, next) {
        try {
            let data = await studentsService.find({ classroom: req.params.id })
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getSubmissionsByClassroomId(req, res, next) {
        try {
            let data = await submissionsService.find({ classroom: req.params.id })
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await classroomsService.create(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await classroomsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await classroomsService.delete(req.params.id)
            return res.send("Deleted")
        } catch (error) {
            next(error);
        }
    }
}
