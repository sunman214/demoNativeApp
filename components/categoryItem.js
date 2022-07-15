import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import HoaImage from '../assets/hoa.png';

export default function CategoryItem(props) {
    return (
      <View style={styles.container}>
        <Text>Category List Item</Text>
        <Image style={styles.image} source={HoaImage}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity: 0.1,
        shadowRadius:10,
        shadowOffset: {width:0,height:0},
        marginBottom:16
    },

    image: {
      width: 64,
      height:64,
    },
  });