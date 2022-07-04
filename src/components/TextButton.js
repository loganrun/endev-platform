import React from 'react'
import {
    Pressable,
    Text
} from 'react-native';

import { COLORS } from '../../constants';


const TextButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress
})=>{
    return(
        <Pressable
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...contentContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: 16,
                    fontWeight: 'bold',
                    ...labelStyle
                }}
            >
                {label}
            </Text>

        </Pressable>
    )
}


export default TextButton