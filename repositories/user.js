import axios from 'axios';

const getUserDetail = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const result = response.data[0];
    return result;
  } catch (error) {
    throw error;
  }
};

const axiosLogin = () => {};

// many other function
export {getUserDetail, axiosLogin};
