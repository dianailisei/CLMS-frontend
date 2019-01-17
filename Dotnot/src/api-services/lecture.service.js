import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Lectures';

export default {
    getAll() {
        return Schedule.get(RESOURCE_NAME);
    },
    getById(id) {
        return Schedule.get(`${RESOURCE_NAME}/${id}`);
    },
    create(teacherId, subjectId, data) { return Schedule.post(`subjects/${subjectId}/teachers/${teacherId}/Lectures`, data); },
    update(teacherId, labId, data) { return Schedule.put(`teachers/${teacherId}/Lectures/${labId}`, data); },
    delete(id) { return Schedule.delete(`${RESOURCE_NAME}/${id}`); }
};