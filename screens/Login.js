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
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../utility/Validation';

function Login(props) {
  //navigation router
  const {navigation, route} = props;
  const {navigate, goback} = navigation;
  const [keyboardShow, setKeyboardShow] = useState(false);
  //states for validating
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  //states to store email/password
  const [email, setEmail] = useState('kotaro@gmail.com');
  const [password, setPassword] = useState('123456');

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShow(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 10,
        backgroundColor: 'white'
      }}
    >
      <ImageBackground
        source={require('../assets/bg2.jpeg')}
        resizeMode="cover"
        style={{flex: 10, marginTop: 50}}
      >
        <View style={{flex: 2.5}}>
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
          {/* ---------------------------------------------------------------- */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 32,
                color: '#ED6263',
                fontWeight: 'bold',
                marginHorizontal: 20
              }}
            >
              Already have an account?
            </Text>
            <Image
              source={require('../assets/bg3.jpeg')}
              style={{
                flex: 1,
                width: 150,
                height: 150,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
          </View>
        </View>

        {/* --------------------------Input Text-------------------------------------- */}

        <View style={{flex: 2.5, marginTop: 10}}>
          <SafeAreaView>
            <Text style={{color: 'white', marginLeft: 12}}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setErrEmail(
                  isValidEmail(text) == true ? '' : 'Email not in correct'
                );
                setEmail(text);
              }}
              value={email}
              placeholder="your email"
            />
            <Text style={{color: 'red', marginLeft: 12}}>
              {errEmail}
            </Text>

            <Text style={{color: 'white', marginLeft: 12}}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setErrPassword(
                  isValidPassword(text) == true ? '' : 'Password not in correct'
                );
                setPassword(text);
              }}
              placeholder="password"
              value={password}
              keyboardType="numeric"
            />
            <Text style={{color: 'red', marginLeft: 12}}>
              {errPassword}
            </Text>
          </SafeAreaView>
        </View>

        {/* ------------------------------Button---------------------------------- */}

        {keyboardShow == false &&
          <View style={{flex: 2.5, backgroundColor: 'grey'}}>
            <Button
              onPress={() => navigate('UITab')}
              title="Press me"
              color="#ED6263"
            />
            <TouchableOpacity
              onPress={() => navigate('Register')}
              style={{padding: 6}}
            >
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: 10,
                  textDecorationLine: 'underline'
                }}
              >
                New user? Register now
              </Text>
            </TouchableOpacity>
          </View>}

        {/* ---------------------------------------------------------------- */}

        {keyboardShow == false &&
          <View style={{flex: 2.5, backgroundColor: 'yellow'}}>
            <Text style={{color: 'white', marginLeft: 6}}>3</Text>
          </View>}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
