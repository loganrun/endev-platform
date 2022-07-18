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
import {SharedElement} from 'react-navigation-shared-element'
import { IconButton, HorizontalCourseCard, LineDivider, CategoryCard } from '../../components';
import { COLORS, FONTS, SIZES, images, icons, dummyData } from '../../../constants';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

//const HEADER_HEIGHT = 250

const CourseListing = ({navigation, route}) => {
  const {category, sharedElementPrefix} = route.params

  const flatListRef = React.useRef()
  const scrollY = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler((event) =>{
    scrollY.value = event.contentInset.y
  })

  function backHandler(){
    navigation.goBack()
  }

  function renderResults(){
    return(
      <Animated.FlatList
      ref={flatListRef}
      data={dummyData.courses_list_2}
      keyExtractor={item => `Results-${item.id}`}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding
      }}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      keyboardDismissMode="on-drag"
      onScroll={onScroll}

      ListHeaderComponent={
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 270,
          marginBottom: SIZES.base
        }}
        >
          {/* Results */}
          <Text
          style={{
            flex: 1,
            fontSize: 16,
            lineHeight: 22
          }}
          >
            5,234 Results
          </Text>

          {/* Filter Button */}
          <IconButton
            icon={icons.filter}
            iconStyle={{
              width: 20,
              height: 20
            }}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent:'center',
              borderRadius: 10,
              backgroundColor: COLORS.primary
            }}
          />


        </View>
      }
      
      renderItem={({item, index})=>(
        <HorizontalCourseCard
          course={item}
          containerStyle={{
            marginVertical: SIZES.padding,
            marginTop: index == 0 ? SIZES.radius :
            SIZES.padding
          }}
        />

      )}

      ItemSeparatorComponent={()=>(
        <LineDivider
        lineStyle={{
          backgroundColor: COLORS.gray20
        }}
        />
      )}


      />
    )
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
      {/* Results */}
      {renderResults()}

      {/* Header */}
      {renderHeader()}


    </View>
  )

  
}

// CourseListing.sharedElements = (route,otherRoute, showing)=>{
//   //const route = useRoute()

//   const {category,sharedElementPrefix } = route.params

//   return [
//     {
//       id: `${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`
//     },
//     {
//       id: `${sharedElementPrefix}-CategoryCard-Title-${category?.id}`
//     }


//   ]
// }

export default CourseListing