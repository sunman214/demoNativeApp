import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

const Chat = props => {
  const {navigation, route} = props;
  const {navigate, goback} = navigation;
  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      name: 'naruto',
      message: 'hello are you kute',
      numberUnread: 0
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
      name: 'sakura',
      message: 'lorem issum...',
      numberUnread: 2
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
      name: 'sasuke',
      message: 'good night',
      numberUnread: 3
    },
    {
      url: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
      name: 'alexander',
      message: 'pro are you pain',
      numberUnread: 4
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
        <TouchableOpacity onPress={() => alert('press')}>
          <Text
            style={{
              padding: 5
            }}
          >
            Left
          </Text>
        </TouchableOpacity>
        <Text>Telegram</Text>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          backgroundColor: 'grey'
        }}
      >
        <TouchableOpacity onPress={() => alert('press')}>
          <Text
            style={{
              padding: 5
            }}
          >
            Unread messages
          </Text>
        </TouchableOpacity>
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
        data={users}
        renderItem={({item}) =>
          <TouchableOpacity
            onPress={() =>
              navigate('Messenger', {
                user: item
              })}
          >
            <View
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
                  {item.numberUnread > 0 &&
                    <Text
                      style={{
                        color: 'white',
                        position: 'absolute',
                        top: 0,
                        right: -10,
                        backgroundColor: '#ED6263',
                        borderRadius: 10
                      }}
                    >
                      {item.numberUnread}
                    </Text>}
                </View>
                <Text style={{fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
              >
                <Text>
                  {item.message}
                </Text>
                <Text>
                  4 minutes ago
                </Text>
              </View>
            </View>
          </TouchableOpacity>}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default Chat;
