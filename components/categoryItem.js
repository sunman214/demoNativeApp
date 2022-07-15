import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import HoaImage from '../assets/hoa.png';

export default function CategoryItem(props) {
    return (
      <View >
        <Text>Category List Item</Text>
        <Image style={styles.Image} source={HoaImage}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    Image: {
      width: 64,
      height:64
    },
  });