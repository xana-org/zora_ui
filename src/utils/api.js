import axios from 'axios';

export async function getScore(url) {
    let res = null;
    try {
        res = await axios.get(url);
    } catch(e) {}
    if (res && res.data) return res.data;
    return res;
}