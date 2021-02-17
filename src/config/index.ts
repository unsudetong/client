import dotenv from 'dotenv';
dotenv.config();

// 로컬 서버에게 요청을 보낼 것인가, 아니면 aws 서버에게 요청을 보낼 것인가?
const setting: any = {
  development: {
    SERVER_ADDRESS: process.env.REACT_APP_DEVELOP_SERVER,
    CLIENT_ROOT: process.env.REACT_APP_CLIENT_DEV_ROOT_ADDRESS,
  },
  production: {
    SERVER_ADDRESS: process.env.REACT_APP_SERVER_ADDRESS,
    CLIENT_ROOT: process.env.REACT_APP_CLIENT_ROOT_ADDRESS,
  },
};

const option: string = process.env.NODE_ENV;

export default setting[option];
