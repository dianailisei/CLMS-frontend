import Axios from 'axios';

const RESOURCE_NAME = '/trivia/Questions';

export default {
    getAll() {
        return Trivia.get(RESOURCE_NAME);
    },
    getById(id) {
        return Trivia.get(`${RESOURCE_NAME}/${id}`);
    },
    getByCourse(id) {
        return Trivia.get(`${RESOURCE_NAME}/courses/${id}`);
    },
    create(data) { return Trivia.post(`${RESOURCE_NAME}`, data); },
    update(data) { return Trivia.put(`${RESOURCE_NAME}`, data) },
    delete(id) { return Trivia.delete(`${RESOURCE_NAME}/${id}`); }
}