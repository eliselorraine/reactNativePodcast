import { LISTEN_API_KEY } from '@env';
const { Client } = require('podcast-api');

const client = Client({
    apiKey: LISTEN_API_KEY || null,
    // apiKey: null,
});

export const apiCall = (q) => {
    const response = client.search({
        q: q, 
        sort_by_date: 1, 
        only_in: 'title', 
        language: 'English',
    }).then(data => {
       return data.data
    }).catch(e => console.log(e.message));
    return response; 
}



