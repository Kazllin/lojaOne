import axios from 'axios'

//https://api.theTCCdb.org/3/

const api = axios.create({
  baseURL:
    'http://localhost:8080/academico/api/v1/'
  
}) //parte que não vai mudar 

export default api;