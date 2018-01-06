import axios from 'axios';
import domen from './domen';

const db = {
	fetchUser(username) {
		return axios.get(`${domen}/api/user`, {
			params: {
				username,
			},
		});
	},
};

export default db;
