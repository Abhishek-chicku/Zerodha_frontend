import axios from "axios";

export const verifyCookie = async () => {
  try {
    const { data } = await axios.post(
      `${Server}/verify`,
      {},
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    console.error("Verify cookie error:", err);
    return { status: false };
  }
};
