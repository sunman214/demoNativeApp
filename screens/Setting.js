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
import Icon from 'react-native-vector-icons/FontAwesome';

function Setting() {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <View
        style={{
          height: 60,
          fontWeight: 'bold',
          backgroundColor: '#ED6263',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{fontWeight: 'bold'}}>SETTING UI</Text>
      </View>
      <View
        style={{
          height: 40,
          fontWeight: 'bold',
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Text style={{fontWeight: 'bold', color: '#ED6263'}}>Common</Text>
      </View>
      <View
        style={{
          boxShadow: 'grey',
          borderWidth: 1,
          borderColor: 'grey'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Language</Text>
          <Text style={{fontWeight: 'bold'}}>English</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Environment</Text>
          <Text style={{fontWeight: 'bold'}}>Production</Text>
        </View>
      </View>
      <View
        style={{
          height: 40,
          fontWeight: 'bold',
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Text style={{fontWeight: 'bold', color: '#ED6263'}}>Account</Text>
      </View>
      <View
        style={{
          boxShadow: 'grey',
          borderWidth: 1,
          borderColor: 'grey'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Phone number</Text>
          <Text style={{fontWeight: 'bold'}}>O</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Email</Text>
          <Text style={{fontWeight: 'bold'}}>0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Sign out</Text>
          <Text style={{fontWeight: 'bold'}}>O</Text>
        </View>
      </View>
      <View
        style={{
          height: 40,
          fontWeight: 'bold',
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Text style={{fontWeight: 'bold', color: '#ED6263'}}>Security</Text>
      </View>
      <View
        style={{
          boxShadow: 'grey',
          borderWidth: 1,
          borderColor: 'grey'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Lock app in background</Text>
          <Text style={{fontWeight: 'bold'}}>O</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Use fingerprint</Text>
          <Text style={{fontWeight: 'bold'}}>0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>Changge password</Text>
          <Text style={{fontWeight: 'bold'}}>O</Text>
        </View>
      </View>
    </View>
  );
}
export default Setting;
