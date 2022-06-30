import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IconButton} from '../../components'
import { COLORS,FONTS, SIZES,icons,
        images, dummyData} from '../../../constants';


const Home = () => {

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
                    <Text> Yo, loganRun</Text>
                    <Text style={{color: COLORS.gray50}}> Thursday June 30, 2022</Text>
                </View>

                {/* notifications */}
                <IconButton 
                icon={icons.notification}
                iconStyle={{tintColor: COLORS.black}}
                />

            </View>
        )
    }
    return (
        <View style={{flex: 1, backgroundColor:COLORS.white}}>
            {/* Header */}
            {renderHeader()}

            {/* Content */}
        </View>
    )
}

export default Home;