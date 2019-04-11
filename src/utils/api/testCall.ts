import Axios from 'axios';

const ROOT_URL = 'http://localhost:3001/comments';

export async function fetchJson(): Promise<string> {
    const result = await Axios.get(ROOT_URL);
    return result.data[0].body;
}

