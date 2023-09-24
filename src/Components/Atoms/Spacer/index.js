import React from 'react';
import { View } from 'react-native';

const Spacer = ({
    height=10,
    width="100%",
    background,
}) => {

    return (
        <View style={{ height: height, width: width, backgroundColor: background, }} />
    );
}

export default Spacer;