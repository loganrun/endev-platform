import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons} from '../../constants';
import IconLabel from './IconLabel';

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
                fontWeight: '900',
                lineHeight: 22
            }}
            >
                {course.title}

            </Text>

            {/* Instructions and Duration */}
            <View
                Style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    marginTop: SIZES.base
                }}
            >
                <Text
                style={{
                    fontSize: 14,
                    lineHeight: 22,
                    fontWeight: '400'
            
                }}
                >
                By {course.instructor}
                </Text>
                <IconLabel
                    icon={icons.time}
                    label={course.duration}
                    containerStyle={{
                        marginLeft: SIZES.base,
                        position: 'absolute',
                        right: 10
                    }}
                    iconStyle={{
                        width:15,
                        height: 15

                    }}
                    labelStyle={{
                        fontSize: 14,
                        lineHeight: 22,
                        fontWeight: '400'
                    }}
                />

            </View>

            {/* Price & Ratings */}

            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.base
            }}
            >
                <Text
                style={{
                   fontSize: 22,
                   lineHeight: 30,
                   color: COLORS.primary
                }}
                >
                    ${course.price.toFixed(2)}
                </Text>

                <IconLabel
                    icon={icons.star}
                    label={course.ratings}
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                    iconStyle={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.primary2
                    }}
                    labelStyle={{
                        marginLeft: 5,
                        color: COLORS.black,
                        fontSize: 16,
                        lineHeight: 22
                    }}
                />

            </View>

        </View>

    </Pressable>
    
  )
}

export default HorizontalCourseCard