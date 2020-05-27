import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentsService {
    async find(query = {}) {
        return await dbContext.Students.find(query);
    }
    async findById(id) {
        let data = await dbContext.Students.findById(id).populate("classroom", "-description")
        if (!data) {
            throw new BadRequest("invalid id")
        }
        return data
    }
    async create(rawData) {
        return await dbContext.Students.create(rawData)
    }
    async edit(update) {
        let data = await dbContext.Students.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Students.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

}

export const studentsService = new StudentsService();