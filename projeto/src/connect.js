import axios from 'axios';
export const connect = axios.create({         
     baseURL: 'https://game-oferta-api.herokuapp.com/games_deals'
});
export const connectWish = axios.create({         
     baseURL: 'https://game-oferta-api.herokuapp.com'
});

export const connectUser = axios.create({         
     baseURL: 'https://game-oferta-api.herokuapp.com/login'
});