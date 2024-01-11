import axios from "axios";

export default axios.create({
    baseURL: 'https://job-search-iogy.onrender.com/api/v1'
})