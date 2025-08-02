import axios from "axios";

export const buyTicketsRequest = async (nombreCompleto, dni, quantity, mail, estado, totalConRecargo) => { 
  try {
    const response = await axios.post('https://gomarket-1-backend.onrender.com/buy', {
      nombreCompleto,
      dni,
      quantity,
      mail,
      estado,
      totalConRecargo, 
    });

    return response.data;
  } catch (error) {
    console.error("Error creando la preferencia de pago", error);
    throw error;
  }

}

//export const getInfoQrRequest = axios.get('https://gomarket-1-backend.onrender.com/', )
