import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

const Messenger = ({route, navigation}) => {
  const {message, name, url} = route.params.user;
  const {navigate, goBack} = navigation;
  const [history, setHistory] = useState([
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      isSender: true,
      message: 'hello are you kute',
      timestamp: 1658286270
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      isSender: false,
      message: 'hello',
      timestamp: 1658286381
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      isSender: true,
      message: 'hey, where are you',
      timestamp: 1658286532
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      isSender: true,
      message: 'kamejo kokoko',
      timestamp: 1658286532
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      isSender: false,
      message: 'Paris, you should go there, it beaty',
      timestamp: 1658286381
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      isSender: false,
      message: 'hehe',
      timestamp: 1658286381
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      isSender: true,
      message: 'yeah, wait me, I can flight here',
      timestamp: 1658286636
    }
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        marginTop: 50
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          backgroundColor: '#ED6263'
        }}
      >
        <TouchableOpacity onPress={() => goBack()}>
          <Text
            style={{
              padding: 5
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
        <Text>
          {name}
        </Text>
        <TouchableOpacity onPress={() => alert('press')}>
          <Text
            style={{
              padding: 5
            }}
          >
            Right
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Chat</Text>
      <FlatList
        style={{flex: 1, backgroundColor: 'green'}}
        data={history}
        renderItem={({item, index}) => {
          return item.isSender == false
            ? <View
                key={index}
                style={{
                  backgroundColor: 'white',
                  height: 80,
                  borderWidth: 2,
                  borderColor: 'grey'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 6
                  }}
                >
                  <View style={{}}>
                    <Image
                      source={{uri: `${item.url}`}}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                  <Text style={{fontWeight: 'bold'}}>
                    {item.timestamp}
                  </Text>
                </View>
                <Text>
                  {item.message}
                </Text>
              </View>
            : /* ---------------------------------------------------------------- */
              /* ---------------------------------------------------------------- */
              /* ---------------------------------------------------------------- */
              <View
                key={item.url}
                style={{
                  backgroundColor: '#e7b6b6',
                  height: 80,
                  borderWidth: 2,
                  borderColor: 'grey'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 6
                  }}
                >
                  <Text style={{fontWeight: 'bold'}}>
                    {item.timestamp}
                  </Text>
                  <View style={{}}>
                    <Image
                      source={{uri: `${item.url}`}}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                </View>
                <Text>
                  {item.message}
                </Text>
              </View>;
        }}
      />
    </View>
  );
};

export default Messenger;
