import { Text, Passable, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '../../constants';

const CategoryCard = ({category, containerStyle}) => {
  return (
    <Passable>
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

        </ImageBackground>
    </Passable>
  )
}

export default CategoryCard