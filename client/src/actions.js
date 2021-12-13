import axios from "axios";
import { apiRoutes } from "./api/apiRoutes";
import { mapCategories, mapBreeds } from "./mapper";

export const getImages = (params) => {
  return axios
    .post(apiRoutes.images, params)
    .then((res) => res.data)
    .catch((error) => error.message);
};

export const getCategories = () => {
  return axios
    .get(apiRoutes.categories)
    .then((res) => mapCategories(res.data))
    .catch((error) => error.message);
};

export const getBreeds = () => {
  return axios
    .get(apiRoutes.breeds)
    .then((res) => mapBreeds(res.data))
    .catch((error) => new Error(error.message));
};
