import {sendRequest} from "./Api";
import { Movie } from "../../models/http/getMovies";

export const getMoviesApi = (): Promise<Movie[]> => {
        return sendRequest<Movie[]>('get', `/movies`)
};
