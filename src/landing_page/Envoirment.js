let IS_PROD = true;

const Server = IS_PROD
  ? "https://zerodha-backend-4.onrender.com/"
  : "http://localhost:4000";

export default Server;
