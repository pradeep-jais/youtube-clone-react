export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '6e72a45697mshe2c47dd4ead959bp1ce898jsn12668f02d036',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// console.log(options.headers);

// const fetFromAPI = async (url) => {
//   try {
//     const response = await axios(`${BASE_URL}/${url}`, options);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.log('error');
//     return error;
//   }
// };

// export default fetFromAPI;
