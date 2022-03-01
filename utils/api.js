import { LISTEN_API_KEY, LISTEN_API_URL } from '@env';
const { Client } = require('podcast-api');

const client = Client({ apiKey: LISTEN_API_KEY });

client.search({
    q: 'true crime',
}).then((response) => {
    console.log(response.data)
}).catch(e => console.log(e.message));

export const apiCall = (q) => {
    console.log(LISTEN_API_URL, LISTEN_API_KEY);
}
//     console.log(q);
//     fetch(`${LISTEN_API_URL}/search?q=${q}`, {
//         method: 'GET',
//         headers: {
//             'X-ListenAPI-Key': `${LISTEN_API_KEY}`,
//         },

//     }).then(data => console.log(data.json()))
//         .catch((error) => console.log(error.message))


// }

