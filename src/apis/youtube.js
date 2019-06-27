import axios from 'axios'

const KEY = 'AIzaSyBRd-oOfKAEw2S9k1sGLdnNJ6eR9Muy_tY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
