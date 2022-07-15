import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {IconButton, TextButton,VerticalCourseCard, LineDivider, CategoryCard, HorizontalCourseCard} from '../../components'

import { COLORS,FONTS, SIZES,icons,
        images, dummyData} from '../../../constants';

const Section =({containerStyle, title, onPress, children }) =>{
    return(
        <View
        style={{
            ...containerStyle
        }}
        >
            <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding
            }}
            >
                <Text
                style={{
                    flex: 1,
                    fontSize: 22,
                    fontWeight: 'bold'
                }}
                >
                    {title}
                </Text>
                <TextButton
                contentContainerStyle={{
                    width: 100,
                    borderRadius: 30,
                    backgroundColor: COLORS.primary
                }}
                label="See All"
                onPress={onPress}
                />

            </View>

            {children}

        </View>
    )

}


const Home = () => {

    const navigation = useNavigation()

    function renderHeader(){
        return(
            <View style={{
                flexDirection: 'row',
                marginTop:  40,
                marginBottom:   10,
                paddingHorizontal:  SIZES.padding,
                alignItems: 'center'
            }}>

                {/* Greetings */}
                <View style={{ flex: 1}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}> Yo, loganRun</Text>
                    <Text style={{color: COLORS.gray50, fontSize:16}}> Thursday June 30, 2022</Text>
                </View>

                {/* notifications */}
                <IconButton 
                icon={icons.notification}
                iconStyle={{tintColor: COLORS.black}}
                />

            </View>
        )
    }

    function renderStartLearning(){
        return (
            <ImageBackground
            source={images.featured_bg_image}
            style={{alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
            }}

            imageStyle={{borderRadius: SIZES.radius}}
            >
                {/* Info */}
                <View>
                    <Text style={{
                        color: COLORS.white,
                        fontSize:24
                    }}>
                        HOW TO
                    </Text>
                    <Text style={{color: COLORS.white,
                                    fontSize:24,
                                    fontWeight: "bold"}}>
                        Make your brand more visible with our checklist
                    </Text>
                    <Text
                    style={{color: COLORS.white,
                            marginTop: SIZES.radius}}>
                        By Scott Harris
                    </Text>
                </View>
                {/* Image */}
                <Image
                    source={images.start_learning}
                    style={{
                        width: "100%",
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                />

                {/* Button */}
                <TextButton
                label='Start Learning'
                contentContainerStyle={{
                    height: 40,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 20,
                    backgroundColor: COLORS.white

                }}
                labelStyle={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: 'bold'
                }}
                />

            </ImageBackground>
        )
    }

    function renderCourses(){
        return(
            <FlatList
                horizontal
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => 'Courses-${item.id}'}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({item, index}) =>(
                    <VerticalCourseCard
                    containerStyle={{
                        marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                        marginRight: index == dummyData.courses_list_1.length -1 ? 
                        SIZES.padding : 0
                    }}
                    course={item}


                    />
                )}

            />
        )
    }

    function renderCategories(){
        return(
            <Section
                title="Categories"
            >
                <FlatList
                    horizontal
                    data={dummyData.categories}
                    listKey="Categories"
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({item, index}) =>(
                        <CategoryCard
                        sharedElementPrefix='Home'
                        category={item}
                        containerStyle={{
                            marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                            marginRight: index == dummyData.categories.length-1 ? SIZES.padding : 0
                        }}
                        onPress={()=> navigation.navigate
                            ("CourseListing",{category:item, sharedElementPrefix: 'Home'})}
                        />
                    )}
                />

            </Section>

        )
    }

    function renderPopularCourses(){
        return(
        <Section
        title='Popular Courses'
        containerStyle={{
            marginTop: 30
        }}
        >
            <FlatList
                data={dummyData.courses_list_2}
                listKey='PopularCourses'
                scrollEnabled={false}
                keyExtractor={item => `PopularCourse-${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
                renderItem={({item, index})=>(
                    <HorizontalCourseCard
                    course={item}
                    containerStyle={{
                        marginVertical: SIZES.padding,
                        marginTop: index == 0 ? SIZES.radius : SIZES.padding
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

        </Section>
    )}

    return (
        <View style={{flex: 1, backgroundColor:COLORS.white}}>
            {/* Header */}
            {renderHeader()}

            {/* Content */}
            <ScrollView
            contentContainerStyle={{
                paddingBottom: 150
            }}
            showsVerticalScrollIndicator={false}
            >
                {/* Start Learning */}
                {renderStartLearning()}

                {/* Courses */}
                {renderCourses()}
                <LineDivider
                    lineStyle={{
                        marginVertical: SIZES.padding
                    }}
                />

                {/* Categories */}
                {renderCategories()}
                {/* Popular Courses */}
                {renderPopularCourses()}

            </ScrollView>
        </View>
    )
}

export default Home;