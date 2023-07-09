import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '6e72a45697mshe2c47dd4ead959bp1ce898jsn12668f02d036',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// console.log(options.headers);

const fetFromAPI = async (url) => {
  const response = await axios(`${BASE_URL}/${url}`, options);
  return response.data;
};

export default fetFromAPI;
