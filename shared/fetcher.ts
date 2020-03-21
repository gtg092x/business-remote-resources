import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:3000'
})

export const fetcher = url => client(url)
  .then(response => response.data)