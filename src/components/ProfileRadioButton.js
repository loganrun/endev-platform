import { View, Text, Pressable, Animated, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const ProfileRadioButton = ({icon, label, isSelected, onPress}) => {

    const radioAnimated = React.useRef(new Animated.Value(0)).current;
    const circleColorAnimated= radioAnimated.interpolate({
        inputRange: [0,17],
        outputRange: [COLORS.gray40, COLORS.primary]
    })

    const lineColorAnimated = radioAnimated.interpolate({
        inputRange: [0,17],
        outputRange: [COLORS.additionalColor4, COLORS.additionalColor13]
    })

    React.useEffect(() => {
        if(isSelected){
            Animated.timing(radioAnimated,{
            toValue: 17,
            duration: 300,
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(radioAnimated,{
        toValue: 0,
        duration: 300,
        useNativeDriver: false
    }).start();
}
    },[isSelected])
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
        {/* Radio Button */}
        <Pressable
        style={{
            width: 40,
            height:40,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        onPress={onPress}
        >

            <Animated.View
            style={{
                width: '100%',
                height: 5,
                borderRadius: 3,
                backgroundColor: lineColorAnimated
            }}
            />
            <Animated.View
            style={{
                position: 'absolute',
                left: radioAnimated,
                width: 25,
                height: 25,
                borderRadius: 15,
                borderWidth: 5, 
                borderColor: circleColorAnimated,
                backgroundColor: COLORS.white
            }}
            />

        </Pressable>
    
    </View>
)
}

export default ProfileRadioButton