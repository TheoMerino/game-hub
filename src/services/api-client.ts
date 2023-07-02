import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '44463999b9d2457a86cb0b0a12b2e518'
    }
})
