import axios from "axios";

export const buyTicketsRequest = async (quantity, mail, estado, total) => { 
  try {
    const response = await axios.post('https://gomarket-1-backend.onrender.com/buy', {
      quantity,
      mail,
      estado,
      total, 
    });

    return response.data;
  } catch (error) {
    console.error("Error creando la preferencia de pago", error);
    throw error;
  }

}