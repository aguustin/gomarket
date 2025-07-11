import axios from "axios";

export const buyTicketsRequest = async (quantity, mail, estado, total) => { 
  try {
    const response = await axios.post('http://127.0.0.1:4000/buy', {
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