
import React from 'react';
import {
    View,
    Text, 
    Image,
    Pressable,
    ScrollView,
    StyleSheet
} from 'react-native';
import {TextButton, IconButton, LineDivider, CategoryCard} from '../../components'
import {COLORS, FONTS, SIZES, icons, dummyData } from '../../../constants'

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
    return (
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}
        >
            {/* Header */}
            {renderHeader()}

            <ScrollView>
                
            </ScrollView>
        </View>
    )
}

export default Profile;