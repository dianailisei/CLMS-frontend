import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Subjects';

export default {
    getAll() {
        return Schedule.get(RESOURCE_NAME);
    },
    getById(id) {
        return Schedule.get(`${RESOURCE_NAME}/${id}`);
    },
    getByTeacher(id) {
        return Schedule.get(`teachers/${id}`)
    },
    create(id, data) { return Schedule.post(`teachers/${id}`, data); },
    update(id, data) { return Schedule.put(`${RESOURCE_NAME}/${id}`, data); },
    delete(id) { return Schedule.delete(`${RESOURCE_NAME}/${id}`); }
};