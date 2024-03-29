import axios from "axios";

class ReminderService {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    async getReminders() {
        const response = await this.http.get('todos')
        return response.data
    }

    async addReminder(title: string) {
        const response = await this.http.post('todos', { title })
        return response.data
    }

    async removeReminder(id: number) {
        const response = await this.http.delete('todos/' + id)
        return response.data
    }
}

export default new ReminderService()

