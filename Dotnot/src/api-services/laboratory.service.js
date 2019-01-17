import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Laboratory';

export default {
    getAll() {
        return Schedule.get(RESOURCE_NAME);
    },
    getById(id) {
        return Schedule.get(`${RESOURCE_NAME}/${id}`);
    },
    create(subjectId, teacherId, data) { return Schedule.post(`subjects/${subjectId}/teachers/${teacherId}/Laboratory`, data); },
    update(teacherId, labId, data) { return Schedule.put(`teachers/${teacherId}/Laboratory/${labId}`, data); },
    delete(id) { return Schedule.delete(`${RESOURCE_NAME}/${id}`); }
};