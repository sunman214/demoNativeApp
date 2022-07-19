import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 45,
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected ? 'white' : null,
      }}
    >
      {isSelected == true &&
        <Icon
          size={20}
          name={'check-circle'}
          style={{
            color: 'green',
            position: 'absolute',
            top: 10,
            left: 10,
          }}
        />}
      <Text
        style={{
          color: '#ED6263',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default UIButton;
