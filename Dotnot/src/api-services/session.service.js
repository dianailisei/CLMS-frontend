import Axios from 'axios';

const RESOURCE_NAME = '/api/Sessions';

export default {
    getAll() {
        return Attendance.get(RESOURCE_NAME);
    },
    getById(id) {
        return Attendance.get(`${RESOURCE_NAME}/${id}`);
    },
    getByLabId(id) {
        return Attendance.get(`${RESOURCE_NAME}/laboratory/${id}`)
    },
    create(data) { return Attendance.post(RESOURCE_NAME, data); },
    update(id, data) { return Attendance.put(`${RESOURCE_NAME}/${id}`, data); },
    delete(id) { return Attendance.delete(`${RESOURCE_NAME}/${id}`); }
};