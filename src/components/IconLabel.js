import {Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '../../constants';

const IconLabel = ({containerStyle, icon, iconStyle, label,labelStyle}) => {
  return (
    <View
    style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle

    }}
    >
      <Image
      source={icon}
      style={{
        width: 20,
        height: 20,
        tintColor: COLORS.gray30,
        ...iconStyle
      }}
      />

      <Text
      style={{
        marginLeft: SIZES.base,
        color: COLORS.gray30,
        ...labelStyle
      }}>
        {label}
      </Text>
    </View>
  )
}

export default IconLabel

