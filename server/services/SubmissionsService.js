import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { studentsService } from "./StudentsService";

class SubmissionsService {
    async find(query = {}) {
        return await dbContext.Submissions.find(query);
    }
    async findById(id) {
        let data = await dbContext.Submissions.findById(id)
            .populate("classroom", "-description")
            .populate("student")
        if (!data) {
            throw new BadRequest("invalid id")
        }
        return data
    }
    async create(rawData) {
        let student = await studentsService.findById(rawData.student)
        // @ts-ignore
        if (!student || student.classroom.id != rawData.classroom) {
            throw new BadRequest("Invalid Student/Classroom")
        }
        return await dbContext.Submissions.create(rawData)
    }
    async edit(update) {
        let data = await dbContext.Submissions.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Submissions.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

}

export const submissionsService = new SubmissionsService();