import axios from 'axios';
import { Movie } from './getMovies';

 
const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=519a0f8d';
 
export const getDetailMovie = async (id: number): Promise<Movie | null> => {
  try {
    const response = await axios.get<Movie>(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
 
    console.error('Errore durante la richiesta di getDetailMovie:', error);
    throw error;
  }
};