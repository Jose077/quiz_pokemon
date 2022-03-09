import { api } from '../../boot/axios.ts'

export async function getPokemons({ state }) {
    return new Promise((resolve, reject) => {
        api.request(
            {
                url: '/pokemon',
                method: 'GET',
                // headers: { 'Authorization': `Bearer ${rootState.token}` }
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

