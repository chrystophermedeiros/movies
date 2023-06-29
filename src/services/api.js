import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '9e01a24c387a7503b327b9dd8ea616d5',
    language: 'pt-BR',
    page: 1
  }
})
