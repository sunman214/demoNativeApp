import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  FlatList
} from 'react-native';
import FoodItem from './FoodItem';
import Icon from 'react-native-vector-icons/FontAwesome';

function FoodGrid() {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([
    {
      name: 'che thai',
      status: 'con hang',
      price: 25,
      website: 'cooku.hello',
      stars: 4,
      heart: true
    },
    {
      name: 'che buoi',
      status: 'con hang',
      price: 30,
      website: 'cooku.hello',
      heart: true,
      stars: 3
    },
    {
      name: 'hu tieu',
      status: 'het hang',
      price: 20,
      website: 'cooku.hello',
      heart: true,
      stars: 5
    },
    {
      name: 'bun mang',
      status: 'con hang',
      price: 35,
      website: 'cooku.hello',
      heart: true,
      stars: 2
    },
    {
      name: 'chan ga nuong',
      status: 'con hang',
      price: 15,
      website: 'cooku.hello',
      heart: true,
      stars: 3
    },
    {
      name: 'banh trang tron',
      status: 'het hang',
      price: 10,
      website: 'cooku.hello',
      heart: true,
      stars: 1
    }
  ]);

  const [cate, setCate] = useState([
    {
      name: 'sang',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7XCHJBT3fsEECfMkGAUl0OoPZxxD3W29jw&usqp=CAU'
    },
    {
      name: 'trua',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7XCHJBT3fsEECfMkGAUl0OoPZxxD3W29jw&usqp=CAU'
    },
    {
      name: 'toi',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7XCHJBT3fsEECfMkGAUl0OoPZxxD3W29jw&usqp=CAU'
    },
    {
      name: 'an vat',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7XCHJBT3fsEECfMkGAUl0OoPZxxD3W29jw&usqp=CAU'
    },
    {
      name: 'linh tinh',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7XCHJBT3fsEECfMkGAUl0OoPZxxD3W29jw&usqp=CAU'
    }
  ]);
  const filterSearch = () =>
    foods.filter(eachFood =>
      eachFood.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

  return (
    <View style={{flex: 1, marginTop: 50}}>
      <View style={{height: 60}}>
        <TextInput
          onChangeText={text => {
            setSearch(text);
          }}
          style={styles.input}
          placeholder="search"
        />
      </View>
      <View style={{height: 100}}>
        <FlatList
          horizontal
          data={cate}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-around',
                  width: 100,
                  height: 100
                }}
              >
                <Image
                  source={{uri: `${item.uri}`}}
                  style={{width: 50, height: 50}}
                />
                <Text style={{color: ''}}>
                  {item.name}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.name}
        />
      </View>
      <FlatList
        style={{marginTop: 50}}
        numColumns={2}
        data={filterSearch()}
        renderItem={({item, index}) =>
          <View
            style={{
              height: 200,
              flex: 0.5,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#ED6263'
            }}
          >
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}
            >
              <Image
                source={require('../../assets/food1.jpeg')}
                style={{width: 80, height: 80, borderRadius: 20}}
              />
              <Text style={{fontWeight: 'bold'}}>
                {item.price}Usd
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Ten mon:</Text>
              <Text
                style={{color: item.status == 'con hang' ? 'yellow' : 'green'}}
              >
                {item.name}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>STATUS:</Text>
              <Text
                style={{color: item.status == 'con hang' ? 'yellow' : 'green'}}
              >
                {item.status}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Website:</Text>
              <Text>
                {item.website}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                let cloneDataFoods = foods.map(each => {
                  if (each.name == item.name) {
                    return {
                      ...each,
                      heart:
                        each.heart == false || each.heart == undefined
                          ? true
                          : false
                    };
                  }
                  return each;
                });
                setFoods(cloneDataFoods);
              }}
            >
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="heart"
                  size={22}
                  color={
                    item.heart == false || item.heart == undefined
                      ? 'grey'
                      : 'red'
                  }
                />
                <Text style={{color: 'red'}}>Saved for later</Text>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              {[0, 1, 2, 3, 4].map(i => {
                return (
                  <Icon
                    name="star"
                    size={22}
                    color={i < item.stars ? 'yellow' : 'grey'}
                  />
                );
              })}
            </View>
          </View>}
        keyExtractor={item => item.name}
      />
    </View>
  );
}
export default FoodGrid;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
