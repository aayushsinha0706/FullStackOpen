import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response  => response.data)
}

const addBlog = async (newBlog) => {
    const config = {
        headers : {
            'Authorization': token
        }
    }

    const response = await axios.post(baseUrl, newBlog, config)
    return response.data
}

const likeBlog = async (id, likedBlog) => {
    const request = axios.put(`${baseUrl}/${id}`, likedBlog)
    const response = await request
    return response.data
}

const deleteBlog = async (id) => {
    const config = {
        headers : {
            'Authorization': token
        }
    }
    const response = await axios.delete(`${baseUrl}/${id}`,config)
    return response.status
}

export default {
    getAll,
    addBlog,
    setToken,
    likeBlog,
    deleteBlog,
}