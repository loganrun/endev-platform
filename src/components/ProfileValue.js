import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { COLORS, Fonts, SIZES, icons } from '../../constants'

const ProfileValue = ({icon, label,value, onPress}) => {
  return (
    <Pressable
    style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    }}
    onPress = {onPress}
    >
        {/* Icon */}
        <View
        style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.additionalColor11
        }}
        >
            <Image
            source={icon}
            resizeMode='contain'
            style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary
            }}
            />

        </View>

    </Pressable>
  )
}

export default ProfileValue