import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.REACT_YOUTUBE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetFromAPI = async (url) => {
  const response = await axios(`${BASE_URL}/${url}`, options);
  return response.data;
};

export default fetFromAPI;
