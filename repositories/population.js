import axios from 'axios';
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
//https://datausa.io/api/data?drilldowns=${Nation}&measures=${Population}

const getPopulation = async () => {
  const urlGetPopulation = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
  try {
    let result = [];
    const responseData = await axios.get(urlGetPopulation);
    responseData.data.data.forEach(item => {
      let myObject = {};
      myObject.nationId = item['ID Nation'];
      myObject.nationName = item['Nation'];
      myObject.year = item['Year'];
      myObject.population = item['Population'];
      result.push(myObject);
    });
    console.log('result', result);
    debugger;
    return result;
  } catch (error) {
    throw error;
  }
};

export {getPopulation};
