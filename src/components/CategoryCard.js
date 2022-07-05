import { Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '../../constants';

const CategoryCard = ({category, containerStyle}) => {
  return (
    <Pressable>
        <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
            height: 150,
            width: 200,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            justifyContent: 'flex-end',
            ...containerStyle 
        }}
        >

        <Text 
        style={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: '900'
        }}
        >
            {category?.title}
        </Text>

        </ImageBackground>
    </Pressable>
  )
}

export default CategoryCard