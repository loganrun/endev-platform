import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons} from '../../constants';

const HorizontalCourseCard = ({containerStyle, course}) => {
  return (
    <Pressable
    style={{
        flexDirection:'row',
        ...containerStyle,
    }}
    >
        {/* Thumbnail */}
        <ImageBackground
        source={course.thumbnail}
        resizeMode='cover'
        style={{
            width: 130,
            height: 130,
            marginBottom: SIZES.radius
        }}
        imageStyle={{
            borderRadius: SIZES.radius
        }}

        >
            <View
            style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: COLORS.white
            }}
            >
                <Image
                source={icons.favourite}
                resizeMode='contain'
                style={{
                    width:20,
                    height:20,
                    tintColor: course.is_favourite ? COLORS.secondary : COLORS.additionalColor4                }}
                />

            </View>

        </ImageBackground>
        {/* Details */}

        <View
        style={{
            flex: 1,
            marginLeft: SIZES.base
        }}
        >
            {/* Title */}
            <Text
            style={{
                fontSize: 18,
                fontWeight: '900'
            }}
            >
                {course.title}

            </Text>

        </View>

    </Pressable>
    
  )
}

export default HorizontalCourseCard