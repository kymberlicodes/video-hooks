import axios from 'axios'

const KEY = 'AIzaSyAXNWvG3Ix1eYZLwCv9j_kdqIcx7LJJZbQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})