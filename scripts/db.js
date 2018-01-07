import axios from 'axios';
import host from './host';

const db = {
	fetchUser(username) {
		return axios.get(`${host}/api/user`, {
			params: {
				username,
			},
		});
	},
};

export default db;
