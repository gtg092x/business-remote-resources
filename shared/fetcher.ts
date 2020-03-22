import axios from 'axios'

export const client = axios.create({})

export const fetcher = url => client(url)
  .then(response => response.data)