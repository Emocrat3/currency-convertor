import axios from 'axios';

export async function getCurrencies() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/currencies?apikey=${process.env.REACT_APP_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function getLatestExchangeValue() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/latest?apikey=${process.env.REACT_APP_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
