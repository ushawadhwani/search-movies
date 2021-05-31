import { apiKey } from "./constants";

export const createPlatformURL = (search) => {
  let publicUrl = `http://www.omdbapi.com/?t=${search}&apikey=${apiKey}`;

  return encodeURI(publicUrl);
};
