import Axios from 'axios';

const RESOURCE_NAME = '/schedule/Students';

export default {
    getAll() {
        return Schedule.get(RESOURCE_NAME);
    },
    getById(id) {
        return Schedule.get(`${RESOURCE_NAME}/${id}`);
    },
    getByEmail(email, pwd) {
        return Schedule.get(`${RESOURCE_NAME}/${email}/${pwd}`)
    },
    create(data) { return Schedule.post(RESOURCE_NAME, data); },
    update(id, data) { return Schedule.put(`${RESOURCE_NAME}/${id}`, data); },
    delete(id) { return Schedule.delete(`${RESOURCE_NAME}/${id}`); }
};