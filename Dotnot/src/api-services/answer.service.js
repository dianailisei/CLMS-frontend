import Axios from 'axios';

const RESOURCE_NAME = '/trivia/Answers';

export default {
    getAll() {
        return Trivia.get(RESOURCE_NAME);
    },
    getById(id) {
        return Trivia.get(`${RESOURCE_NAME}/${id}`);
    },
    create(data) { return Trivia.post(`${RESOURCE_NAME}`, data); },
    delete(id) { return Trivia.delete(`${RESOURCE_NAME}/${id}`); }
}