import { Text, Pressable, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import {SharedElement} from 'react-native-shared-element'
import { COLORS, SIZES} from '../../constants';

const CategoryCard = ({sharedElementPrefix, category, containerStyle, onPress}) => {
  return (
    <Pressable
    style={{
      height: 150,
      width: 200,
      ...containerStyle
    }}
    onPress={onPress}
    >
      <SharedElement
      id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
      style={[StyleSheet.absoluteFillObject]}
      >
      <Image
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
            height: '100%',
            width: '100%',
            borderRadius: SIZES.radius 
        }}
        />
      </SharedElement>
        
        <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 5
        }}
        >
        <SharedElement
        id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
        style={[StyleSheet.absoluteFillObject]}
        >
        <Text 
        style={{
            position: 'absolute',
            color: COLORS.white,
            fontSize: 20,
            fontWeight: '900'
        }}
        >
            {category?.title}
        </Text>
        </SharedElement>
        
        </View>
        
        
    </Pressable>
  )
}

export default CategoryCard