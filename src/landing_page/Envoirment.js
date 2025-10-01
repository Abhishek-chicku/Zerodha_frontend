

const IS_PROD = process.env.NODE_ENV === "production"; 

const Server = IS_PROD
  ? "https://zerodha-backend-7.onrender.com/api/auth"
  : "http://localhost:4000/api/auth";                

export default Server;


