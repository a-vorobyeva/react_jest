import axios from 'axios'

export const getAnswer = async (url = 'https://yesno.wtf/api?force=yes') => {
    try {
        const response = await axios.get(url);
        const data = await response.data;
    
        return data;
    }
    catch (e) {
        return e.message
    }
}

export const  getRandomAnswer = async (url = 'https://yesno.wtf/api') => {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        
        return data;    
    }
    catch (e) {
        return e.message
    }
}