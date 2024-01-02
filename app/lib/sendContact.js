import axios from "axios";

export const sendContact = async (data) => {
  try {
    const res = await axios.post("api/contact", data, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
