

let IS_PROD = true;
const Server = IS_PROD
  ? "https://zerodha-backend-9.onrender.com//api/auth"
  : "http://localhost:4000/api/auth";
export default Server;
