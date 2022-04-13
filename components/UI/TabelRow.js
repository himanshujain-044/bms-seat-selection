import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SeatsSelectionGrid from './SeatsSelectionGrid';

const TabelRow = () => {
    const a = [
        {
            title: '2001',
            // position: [2, 4],
            position: 4,
            status: 'available',
            color: 'white',
        },
        {
            title: '1002',
            // position: [5, 3],
            position: 8,
            status: 'booked',
            color: 'red',
        },
        {
            title: '1003',
            // position: [0, 7],
            position: 0,
            status: 'blocked',
            color: 'red',
        },
        {
            title: '1004',
            // position: [0, 8],
            position: 11,
            status: 'available',
            color: 'white',
        },
        {
            title: '1005',
            // position: [1, 2],

            position: 22,
            status: 'available',
            color: 'white',
        },
        {
            title: '1006',
            // position: [2, 1],
            position: 20,
            status: 'booked',
            color: 'red',
        },
        {
            title: '1007',
            position: [3, 4],
            // status: 'available',
            position: 12,
            color: 'white',
        },
        {
            title: '1008',
            // position: [2, 8],
            position: 4,
            status: 'reserved',
            color: 'red',
        },
        {
            title: '1009',
            // position: [1, 9],
            position: 2,
            status: 'available',
            color: 'white',
        },
    ];
    const row = 18;
    const column = 32;

    // const arr = new Array(row).fill({}).map(() => new Array(column).fill({}));
    // for (let i = 0; i < a.length; i++) {
    //     arr[a[i].position[0]][a[i].position[1]] = a[i];
    // }

    const arr = new Array(row * column).fill({});

    for (let i = 0; i < a.length; i++) { 
        arr[a[i].position] = a[i];
    }
    // console.log('72', arr);

    // const renderItems = () => {
    //     arr.map((row) => {
    //         row.map((item) => {
    //             console.log('76');
    //             <Text>{item?.title}</Text>;
    //         });
    //     });
    // };
    // console.log('73', arr);
    return (
        <View style={styles.container}>
            <View style={styles.seatSelectionGrid}>
                <Text>Hello</Text>
                <SeatsSelectionGrid data={arr} column={column} />
            </View>
            {/* <Button title="Submit" /> */}
        </View>
    );
};

export default TabelRow;

const styles = StyleSheet.create({
    container: {
        // borderRadius: 4,
    },
    seatSelectionGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        marginVertical: 20,
    },
});
