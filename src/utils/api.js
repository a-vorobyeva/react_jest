import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

export const getAnswer = async (answer) => {
    try {
        const response = await axios.get(`${API_URL}?force=${answer}`);
        const data = await response.data;
    
        return data;
    }
    catch (e) {
        return e.message
    }
}

export const  getRandomAnswer = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = await response.data;
        
        return data;    
    }
    catch (e) {
        return e.message
    }
}