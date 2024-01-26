import axios from 'axios';
 
const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=519a0f8d';
 
export interface Movie {
  id: number;
  titolo: string;
  anno: number;
  genere: string;
}
 
export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<Movie[]>(baseURL);
    return response.data;
  } catch (error) {
    console.error('Errore durante la richiesta di getMovies:', error);
    throw error;
  }
};