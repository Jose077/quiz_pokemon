import { api } from '../../boot/axios.ts'

export async function getPokemons({ state }) {
    let limit = 8;
    let offset = 0;
    return new Promise((resolve, reject) => {
        api.request(
            {
                url: `/pokemon`,
                method: 'GET',
                params: {
                  limit,
                  offset
                }
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



