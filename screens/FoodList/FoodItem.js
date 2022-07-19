import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

function FoodItem(props) {
  let {name, status, price, website} = props.food;
  let {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'grey'
      }}
    >
      <Image
        source={require('../../assets/food1.jpeg')}
        style={{width: 80, height: 80, margin: 5}}
      />
      <View
        style={{
          marginLeft: 12,
          marginRight: 20,
          flex: 1
        }}
      >
        <Text>
          {name}
        </Text>
        <View style={{height: 2, backgroundColor: 'black'}} />
        <View style={{flexDirection: 'row'}}>
          <Text>STATUS:</Text>
          <Text style={{color: status == 'con hang' ? 'yellow' : 'green'}}>
            {status}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Price:</Text>
          <Text>
            {price}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Food Type:</Text>
          <Text>Pizza</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Website:</Text>
          <Text>
            {website}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
