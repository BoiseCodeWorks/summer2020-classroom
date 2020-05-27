import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ClassroomsService {
    async find(query = {}) {
        return await dbContext.Classrooms.find(query);
    }
    async findById(id) {
        let data = await dbContext.Classrooms.findById(id)
        if (!data) {
            throw new BadRequest("invalid id")
        }
        return data
    }
    async create(rawData) {
        return await dbContext.Classrooms.create(rawData)
    }
    async edit(update) {
        let data = await dbContext.Classrooms.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Classrooms.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

}

export const classroomsService = new ClassroomsService();