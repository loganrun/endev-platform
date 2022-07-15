import { View, Text, Image, FlatList, StyleSheet, BackHandler } from 'react-native'
import React from 'react'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element'
import { IconButton, HorizontalCourseCard, LineDivider, CategoryCard } from '../../components';
import { COLORS, FONTS, SIZES, images, icons, dummyData } from '../../../constants';


const CourseListing = (navigation) => {

  const route = useRoute()
  const {category, sharedElementPrefix} = route.params

  function backHandler(){
    navigation.goBack()

  }

  function renderHeader(){
    return(
      <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 250,
        overflow:'hidden'
      }}
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
            borderBottomLeftRadius: 60
          }}
          />

        </SharedElement>
        <Animated.View
        style={{
          position:'absolute',
          bottom: 70,
          left: 30
        }}
        >
          <SharedElement
          id = {`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}
          >
            <Text
            style={{position: 'absolute',
                    color: COLORS.white,
                    fontSize: 30,
                    lineHeight: 36,

                  }}
            >
              {category?.title}

            </Text>

          </SharedElement>

        </Animated.View>
        <Animated.View>
          <IconButton
          icon={icons.back}
          iconStyle={{
            tintColor: COLORS.black

          }}
          containerStyle={{
            position:'absolute',
            top: 40,
            left: 20,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: COLORS.white
          }}
          onPress={()=>{
            backHandler()
          }}
          />
        </Animated.View>

        <Animated.Image
          source={images.mobile_image}
          resizeMode='contain'
          style={{
            position: 'absolute',
            right: 40,
            bottom: -40,
            width: 100,
            height: 200
          }}

        />

      </Animated.View>
    )
  }
  return (
    <View
    style={{
        flex: 1,
        backgroundColor: COLORS.white,
        
    }}
    >
      {/* Header */}
      {renderHeader()}


    </View>
  )

  
}

CourseListing.sharedElement = (otherRoute, showing)=>{
  const route = useRoute()

  const {category,sharedElementPrefix } = route.params

  return [
    {
      id: `${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`
    },
    {
      id: `${sharedElementPrefix}-CategoryCard-Title-${category?.id}`
    }


  ]
}

export default CourseListing