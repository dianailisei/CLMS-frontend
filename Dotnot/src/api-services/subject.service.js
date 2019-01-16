import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Subjects';

export default {
    getAll() {
        return Axios.get(RESOURCE_NAME);
    },
    getById(id) {
        return Axios.get(`${RESOURCE_NAME}/${id}`);
    },
    getByTeacher(id) {
        return Axios.get(`teachers/${id}`)
    },
    create(id, data) { return Axios.post(`teachers/${id}`, data); },
    update(id, data) { return Axios.put(`${RESOURCE_NAME}/${id}`, data); },
    delete(id) { return Axios.delete(`${RESOURCE_NAME}/${id}`); }
};