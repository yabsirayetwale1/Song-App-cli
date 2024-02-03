import axios from 'axios'

axios.defaults.baseURL = 'http://song-app-api.vercel.app'

export const getSongsAPI = async () => axios.get('/')

export const getSongByIdAPI = async (id) => axios.get(`/${id}`)

export const createSongAPI = async (song) => axios.post(`/`, song)

export const updateSongAPI = async (song) => axios.patch(`/${song._id}`, song)

export const deleteSongByIdAPI = async (id) => axios.delete(`/${id}`)
