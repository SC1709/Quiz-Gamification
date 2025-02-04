import axios from 'axios';

export const fetchQuizData = async () => {
  try {
    const response = await axios.get('/Uw5CrX');
    console.log(response.data.questions);
    
    return response.data.questions;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
};
