import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {getUserDetail, axiosLogin} from '../repositories/user';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

function Profile() {
  const [user, setUser] = useState('');
  const [populations, setPopulations] = useState('');
  const getPopulation = async () => {
    try {
      const urlGetPopulation = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
      const res = await axios.get(urlGetPopulation);
      const result = await res.data;
      const resultPop = await res.data.data;
      setPopulations(resultPop);
      return result;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getUserDetail().then(resultUser => {
      setUser(resultUser);
    });
  }, []);
  useEffect(() => {
    getPopulation();
  }, []);
  console.log('populations', populations);
  //const labelPop = populations.map(item => item['year']);
  //const dataPop = populations.map(item => item['population']);
  const {name, username, website, phone, id, address} = user;
  return (
    <View style={{flex: 1, marginTop: 50, backgroundColor: 'purple'}}>
      <Text>profile</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Name:</Text>
        <Text>
          {name}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>website:</Text>
        <Text>
          {website}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>street:</Text>
        <Text>
          {username}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>populations:</Text>
        <Text>
          {JSON.stringify(populations)}
        </Text>
      </View>
      <View>
        <Text>Bezier Line Chart</Text>
        {populations.length > 0 &&
          <LineChart
            data={{
              labels: populations.map(item => item.Year),
              datasets: [
                {
                  data: populations.map(item =>
                    Math.floor(item.Population / 1000000, 0)
                  )
                }
              ],
              legend: ['population in Usa'] // optional
            }}
            width={Dimensions.get('window').width - 20} // from react-native
            height={180}
            yAxisLabel=""
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726'
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              marginHorizontal: 8,
              borderRadius: 16
            }}
          />}
      </View>
    </View>
  );
}
export default Profile;
