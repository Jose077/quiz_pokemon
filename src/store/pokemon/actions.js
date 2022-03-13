import { api } from '../../boot/axios.ts'

export async function getPokemons({ state }, params) {
    return new Promise((resolve, reject) => {
        api.request(
            {
                url: `/pokemon`,
                method: 'GET',
                params
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

export async function getPokemonByName({ state }, name) {
    return new Promise((resolve, reject) => {
        api.request(
            {
                url: `/pokemon/${name}`,
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



