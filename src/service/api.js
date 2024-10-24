import axios from 'axios'

//https://api.theTCCdb.org/3/

const api = axios.create({
  baseURL:
    'http://localhost:8080/academico/api/v1/'
  
}) //parte que não vai mudar 


// Função para definir o token no cabeçalho
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;