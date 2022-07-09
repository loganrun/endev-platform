
import React from 'react';
import {
    View,
    Text, 
    Image,
    Pressable,
    ScrollView,
    StyleSheet
} from 'react-native';
import {TextButton, IconButton, LineDivider, CategoryCard, ProgressBar, ProfileValue} from '../../components'
import {COLORS, FONTS, SIZES, icons, dummyData,images } from '../../../constants'

const Profile = () => {
    function renderHeader() {
        return(
            <View
                style={{
                    flexDirection: 'row'                    ,
                    marginTop: 50,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        fontSize: 30,
                        lineHeight: 36,
                        fontWeight: 'bold'
                    }}
                >
                    Profile

                </Text>

                <IconButton
                    icon={icons.sun}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                />
            </View>
        )
    }

    function renderProfileCard(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 28,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary3
                }}
            >
                <Pressable
                    style={{
                        width: 80,
                        height: 80
                    }}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width: "100%",
                            height: '100%',
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            width:  '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <View
                        style={{
                            width: 30,
                            height:30,
                            marginBottom: -15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:   15,
                            backgroundColor: COLORS.primary
                        }} 
                        >
                            <Image
                            source={icons.camera}
                            resizeMode='contain'
                            style={{
                                width:17,
                                height:17
                            }}
                            />
                        </View>
                    </View>
                </Pressable>

                {/* Details */}
                <View
                style={{
                    flex:1,
                    marginLeft: SIZES.radius,
                    alignItems: 'flex-start'
                }}
                >
                    <Text
                    style={{
                        color: COLORS.white,
                        fontSize:22,
                        lineHeight:30,
                        fontWeight: '800'
                    }}
                    >
                        LoganRun
                    </Text>

                    <Text
                    style={{
                        color: COLORS.white,
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                    >
                        Full Stack Developer
                    </Text>
                        {/* Progress */}
                    <ProgressBar
                        progress='58%'
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                    />
                    <View
                    style={{
                        flexDirection: 'row'
                    }}
                    >
                        <Text
                        style={{
                            flex:1,
                            color: COLORS.white,
                            fontSize: 14
                        }}
                        >
                            Overall Progress

                        </Text>
                        <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 14
                        }}
                        >
                            58%

                        </Text>
                    </View>
                    {/* Member Button */}
                    <TextButton
                        label='Become a Member'
                        contentContainerStyle={{
                            height: 35,
                            marginTop: SIZES.padding,
                            paddingHorizontal: SIZES.radius,
                            borderRadius: 30,
                            backgroundColor: COLORS.white
                        }}

                        labelStyle={{
                            color: COLORS.primary
                        }}
                        />
                </View>
            </View>
        )
    }
    function renderProfileSection1(){
        return(
            <View
            styles={styles.profileSectionContainer}
            >
                <ProfileValue
                icon={icons.profile}
                label = 'Name'
                value= "LoganRun"
                />

            </View>
        )
    }

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}
        >
            {/* Header */}
            {renderHeader()}

            <ScrollView
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 150
                }}
            >
                {/* profile card */}
                {renderProfileCard()}
                {/* Profile Section 1 */}
                {renderProfileSection1()}
                
            </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})

export default Profile;