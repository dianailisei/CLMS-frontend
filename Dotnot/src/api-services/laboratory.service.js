import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Laboratory';

export default {
    getAll() {
        return Axios.get(RESOURCE_NAME);
    },
    getById(id) {
        return Axios.get(`${RESOURCE_NAME}/${id}`);
    },
    create(subjectId, teacherId, data) { return Axios.post(`subjects/${subjectId}/teachers/${teacherId}/Laboratory`, data); },
    update(teacherId, data) { return Axios.put(`teachers/${teacherId}/Laboratory`, data); },
    delete(id) { return Axios.delete(`${RESOURCE_NAME}/${id}`); }
};