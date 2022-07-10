import { View, Text, Pressable, Animated, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const ProfileRadioButton = ({icon, label, isSelected, onPress}) => {
return (
    <View
    style={{
        flexDirection:'row',
        height: 80,
        alignItems: 'center'
    }}
    >
        <View
        style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.additionalColor11
        }}
            >
                <Image
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.primary
                }}
                />

        </View>
        <View
        style={{
            flex:1,
            marginLeft: SIZES.radius
        }}
        >
            <Text
            style={{
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 22
            }}
            >
                {label}
            </Text>

        </View>
    
    </View>
)
}

export default ProfileRadioButton