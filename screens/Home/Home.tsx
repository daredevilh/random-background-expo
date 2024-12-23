import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Home.styles.ts';
import {generateRandomHexColor} from '@/utils/randomHexColorGenerator';

export const Home = () => {
    const [backgroundColor, setBackgroundColor] = React.useState(
        generateRandomHexColor(),
    );

    const setNewColor = () => {
        setBackgroundColor(generateRandomHexColor);
    };

    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: backgroundColor}]}
            onPress={setNewColor}
            activeOpacity={1}>
            <Text style={styles.text}>Hello there</Text>
        </TouchableOpacity>
    );
};
