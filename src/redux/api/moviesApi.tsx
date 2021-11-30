import { AxiosResponse } from 'axios';
import API from './config';

function get(): Promise<AxiosResponse<any, any>> {
  return API.get('discover/movie');
}

function put(id: number): Promise<AxiosResponse<any, any>> {
  // it should hit /recommendations but I have any api so insted I fetch this particular movie and and place it into state for future usage
  return API.get(`/movie/${id}`);
  // return API.put(`/recommendations/${id}/${param}`);
}

export const moviesApi = {
  get,
  put,
};
