import React from 'react'
import {
    Pressable,
    Image
} from 'react-native'

import { COLORS } from '../../constants'

const IconButton =({containerStyle, icon, iconStyle, onPress})=>{
    return(
        <Pressable
        style={{ ...containerStyle}}
        onPress={onPress}
        >

            <Image
            source={icon}
            resizeMode="contain"
            style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
                ...iconStyle
            }}
            
            />

        </Pressable>

    )
}

export default IconButton