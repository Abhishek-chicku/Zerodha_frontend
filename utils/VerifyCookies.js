import axios from "axios";

export const verifyCookie = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/verify",
      {},
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    console.error("Verify cookie error:", err);
    return { status: false };
  }
};
