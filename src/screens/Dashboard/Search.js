import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

import {Shadow} from 'react-native-shadow-2';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TextButton, CategoryCard} from '../../components'
import {COLORS, FONTS, SIZES, icons, dummyData } from '../../../constants'

const Search = () => {
    const scrollViewRef = React.useRef()

    const scrollY = useSharedValue(0)

    const onScroll = useAnimatedScrollHandler((event) =>{
        scrollY.value = event.contentOffset.y
    })


    function renderTopSearches() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        fontSize: 22,
                        lineHeight: 30,
                        fontWeight: 'bold'
                    }}
                >
                    Top Searches
                </Text>
                <FlatList
                horizontal
                data={dummyData.top_searches}
                listKey="TopSearches"
                keyExtractor={item => `TopSearches-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.radius
                }}
                renderItem={({item,index}) => (
                    <TextButton
                        label={item.label}
                        contentContainerStyle={{
                            paddingVertical: SIZES.radius,
                            paddingHorizontal: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding :SIZES.radius,
                            marginRight: index ==dummyData.top_searches.length-1 ?
                            SIZES.padding : 0,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.gray10

                        }}
                        labelStyle={{
                            color: COLORS.gray50,
                            fontSize: 16,
                            lineHeight: 22
                        }}
                    />
                )}
                />

            </View>

        )
    }

    function renderBrowseCategories() {
    return (
        <View
        style={{
            marginTop: SIZES.padding
        }}
        >
            <Text 
            style={{
                marginHorizontal: SIZES.padding,
                fontSize: 22,
                lineHeight: 30,
                fontWeight: 'bold'
            }}
            >
                Browse Categories
            </Text>

            <FlatList
                data={dummyData.categories}
                listKey="BrowseCategories"
                numColumns={2}
                scrollEnabled={false}
                keyExtractor={item => `BrowseCategories-${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius
                }}
                renderItem={({item,index}) => (
                    <CategoryCard
                    category={item}
                    containerStyle={{
                        height: 130,
                        width: (SIZES.width - (SIZES.padding * 2) - SIZES.radius)/2,
                        marginTop: SIZES.radius,
                        marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                    }}
                    />
                )}
                />
        </View>
    ) 
    }

    function renderSearchBar(){
        return (
            <Animated.View
                style={{
                    position: 'relative',
                    // top:0,
                    // left:0,
                    // right: 0,
                    paddingHorizontal: SIZES.padding,
                    height: 50,
                    marginTop: SIZES.padding
                }}
            >
                <Shadow>
                    <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width - (SIZES.padding * 2),
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                    >
                        <Image
                        source={icons.search}
                        style={{
                            width:25,
                            height:25,
                            tintColor: COLORS.gray40
                        }}
                        />
                        <TextInput
                            style={{
                                flex:1,
                                marginLeft: SIZES.base,
                                fontSize: 14,
                                lineHeight: 22,
                                fontWeight: 'bold'
                            }}
                            value = ''
                            placeholder='Search for Topics, Courses & Educators'
                            placeholderTextColor={COLORS.gray}
                        />

                    </View>

                </Shadow>

            </Animated.View>



        )
    }

    return (
        
        <View
            style={{
                flex:1,
                backgroundColor: COLORS.white,
                top: 0,
                left:0
            }}
        >
            <Animated.ScrollView
            ref = {scrollViewRef}
            contentContainerStyle={{
                marginTop: 50,
                paddingBottom: 300
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            keyboardDismissMode='on-drag'
            onScroll={onScroll}
            //onScrollEndDrag
            >
                
                {/* Render Search Bar */}
                {renderSearchBar()}
                {/* Top Searches */}

                {renderTopSearches()}

                {/* Browse Categories */}

                {renderBrowseCategories()}

                

            </Animated.ScrollView>
        </View>
    )
}

export default Search;