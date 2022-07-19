import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {UIButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

function Welcome(props) {
  //navigation router
  const {navigation, route} = props;
  const {navigate, goback} = navigation;
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Advetiser', isSelected: true},
    {name: 'Publisher', isSelected: false},
    {name: 'Agency', isSelected: false}
  ]);
  return (
    <View style={{marginTop: 30, flex: 1}}>
      <ImageBackground
        source={require('../assets/bg.jpeg')}
        resizeMode="cover"
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../assets/flames.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={{color: 'white', marginLeft: 6}}>YOURCOMPANY.COM</Text>
            <View style={{flex: 1}} />
            <Image
              source={require('../assets/question-mark.png')}
              style={{width: 20, height: 20, marginRight: 10}}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{marginBottom: 10, color: 'white'}}>Welcome to</Text>
          <Text style={{marginBottom: 10, fontWeight: 'bold', color: 'white'}}>
            YOURCOMPANY.COM
          </Text>
          <Text style={{marginBottom: 10, color: 'white'}}>
            Please select your account type
          </Text>
        </View>

        {/*------------------------------------ UI Button -----------------------------*/}
        <View
          style={{
            flex: 3
          }}
        >
          {accountTypes.map(accountType =>
            <UIButton
              key={accountType.name}
              onPress={() => {
                let newAccount = accountTypes.map(each => {
                  return {
                    ...each,
                    isSelected: each.name == accountType.name ? true : false
                  };
                });
                setAccountTypes(newAccount);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          )}
        </View>

        <View
          style={{
            flex: 2
          }}
        >
          <UIButton
            onPress={() => {
              navigate('Login');
            }}
            style={{}}
            title={'Login'.toUpperCase()}
          />
          <Text style={{color: '#ED6263', alignSelf: 'center'}}>
            Please select your account type
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}
          >
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                marginTop: 10,
                textDecorationLine: 'underline'
              }}
            >
              Register?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              height: 40,
              alignItems: 'center',
              marginHorizontal: 20
            }}
          >
            <View style={{backgroundColor: 'white', height: 1, flex: 1}} />
            <Text style={{marginHorizontal: 6, color: 'white'}}>
              Use other method?
            </Text>
            <View style={{backgroundColor: 'white', height: 1, flex: 1}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 10
            }}
          >
            <Icon
              name="facebook"
              size={35}
              style={{color: 'white', marginHorizontal: 10}}
            />
            <Icon
              name="google"
              size={35}
              style={{color: '#ea4335', marginHorizontal: 10}}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
