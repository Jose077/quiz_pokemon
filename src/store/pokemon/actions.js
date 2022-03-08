export function someAction(context) {

    async function getPokemons() {
        return new Promise(resolve => {
            $axios.get('/pokemon').then((res) => {
                console.log(res.data);
                data = res.data;

                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })
    }

}

