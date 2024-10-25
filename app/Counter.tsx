import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Count: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={increment} />
                <Button title="Decrement" onPress={decrement} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    countText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
});

export default Counter;
