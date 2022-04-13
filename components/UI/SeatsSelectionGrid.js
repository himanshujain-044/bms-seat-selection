import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import Grid from 'react-native-grid-component';
import { SEAT_STATUS } from '../../constants/SeatStatus';
import { SEAT_LEGENDS_COLORS } from '../../constants/Colors';
import {
    backgroundColor,
    color,
} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { useEffect } from 'react/cjs/react.production.min';
const SeatsSelectionGrid = ({ data, column }) => {
    // console.log('comp-rerendered!', data);
    const [selectedSeat, setSelectedSeat] = useState(data);
    const seatToggle = (cellDetails, i, j) => {
        let selectedSeat = data[cellDetails?.position];
        console.log(selectedSeat);
        selectedSeat = data.indexOf(selectedSeat);
        data[cellDetails?.position] = {
            ...data[cellDetails?.position],
            selected: !data[cellDetails?.position]?.selected,
            color: 'green',
        };
        console.log('20', data[cellDetails?.position]);
        displayTabel(data[cellDetails?.position]);
        const fn = (cellDetails) => {};

        //2d array
        //
        // data[i][j] = {
        //     ...data[i][j],
        //     selected: !data[i][j]?.selected,
        //     color: 'green',
        // };

        // renderItem(data[i][j]);
        // end 2d array
        setSelectedSeat((preVal) => {
            const neww = preVal.filter((item) => {
                return item?.position !== cellDetails?.position;
            });
            if (neww.length === preVal.length) {
                return [...preVal, cellDetails];
            } else {
                return [...neww];
            }
            return preVal;
        });
        // setSelectedSeat(data[cellDetails?.position]);
    };

    // console.log('205', data.length);
    // useEffect(() => {
    //     seatToggle();
    // }, [seatToggle]);
    // useEffect(() => {
    //     displayTabel();
    // }, []);

    const displayTabel = (column) => {
        return (
            <Pressable
                disabled={
                    [
                        SEAT_STATUS.BLOCKED,
                        SEAT_STATUS.UNAVAILABLE,
                        SEAT_STATUS.RESERVED,
                        SEAT_STATUS.BOOKED,
                    ].includes(column.status) || !column?.title
                        ? true
                        : false
                }
                onPress={seatToggle.bind(this, column)}
                android_ripple={{ color: 'red', borderless: true }}
                style={{}}
            >
                <View
                    style={[
                        column?.title ? styles.cellContainer : styles.cellSpace,
                        // column?.status === SEAT_STATUS.BLOCKED
                        //     ? { backgroundColor: SEAT_LEGENDS_COLORS.BLOCKED }
                        //     : column?.status === SEAT_STATUS.BOOKED
                        //     ? { backgroundColor: SEAT_LEGENDS_COLORS.BOOKED }
                        //     : column?.status === SEAT_STATUS.RESERVED
                        //     ? { backgroundColor: SEAT_LEGENDS_COLORS.BOOKED }
                        //     : column?.status === SEAT_STATUS.UNAVAILABLE
                        //     ? {
                        //           backgroundColor:
                        //               SEAT_LEGENDS_COLORS.UNAVAILABLE,
                        //       }
                        //     : column?.selected
                        //     ? {
                        //           backgroundColor: SEAT_LEGENDS_COLORS.SELECTED,
                        //       }
                        //     : {
                        //           backgroundColor:
                        //               SEAT_LEGENDS_COLORS.AVAILABLE,
                        //       },
                        { backgroundColor: column?.color },
                    ]}
                >
                    <Text>{column?.title}</Text>
                </View>
            </Pressable>
        );
    };

    //2d array
    // const renderItem = (column, i, j) => {
    //     // console.log('107');
    //     return (
    //         <Pressable
    //             disabled={
    //                 [
    //                     SEAT_STATUS.BLOCKED,
    //                     SEAT_STATUS.UNAVAILABLE,
    //                     SEAT_STATUS.RESERVED,
    //                     SEAT_STATUS.BOOKED,
    //                 ].includes(column.status) || !column?.title
    //                     ? true
    //                     : false
    //             }
    //             onPress={seatToggle.bind(this, column, i, j)}
    //             android_ripple={{ color: 'red', borderless: true }}
    //             style={{}}
    //         >
    //             <View
    //                 style={[
    //                     column?.title ? styles.cellContainer : styles.cellSpace,
    //                     column?.status === SEAT_STATUS.BLOCKED
    //                         ? {
    //                               backgroundColor: SEAT_LEGENDS_COLORS.BLOCKED,
    //                           }
    //                         : column?.status === SEAT_STATUS.BOOKED
    //                         ? {
    //                               backgroundColor: SEAT_LEGENDS_COLORS.BOOKED,
    //                           }
    //                         : column?.status === SEAT_STATUS.RESERVED
    //                         ? {
    //                               backgroundColor: SEAT_LEGENDS_COLORS.BOOKED,
    //                           }
    //                         : column?.status === SEAT_STATUS.UNAVAILABLE
    //                         ? {
    //                               backgroundColor:
    //                                   SEAT_LEGENDS_COLORS.UNAVAILABLE,
    //                           }
    //                         : column?.selected
    //                         ? {
    //                               backgroundColor: SEAT_LEGENDS_COLORS.SELECTED,
    //                           }
    //                         : {
    //                               backgroundColor:
    //                                   SEAT_LEGENDS_COLORS.AVAILABLE,
    //                           },
    //                     // { backgroundColor: column?.color },
    //                 ]}
    //             >
    //                 <Text key={Date.now() + Math.random()}>
    //                     {column?.title ? column.title : ''}
    //                 </Text>
    //             </View>
    //         </Pressable>
    //     );
    // };
    //
    // console.log('92');
    // const render = data.map((row, i) => (
    //     <View>
    //         {row.map((column, j) => {
    //             // console.log('99', column);
    //             return renderItem.bind(this, column, i, j);
    //             // <Pressable
    //             //     disabled={
    //             //         [
    //             //             SEAT_STATUS.BLOCKED,
    //             //             SEAT_STATUS.UNAVAILABLE,
    //             //             SEAT_STATUS.RESERVED,
    //             //             SEAT_STATUS.BOOKED,
    //             //         ].includes(column.status) || !column?.title
    //             //             ? true
    //             //             : false
    //             //     }
    //             //     onPress={seatToggle.bind(this, column, i, j)}
    //             //     android_ripple={{ color: 'red', borderless: true }}
    //             //     style={{}}
    //             // >
    //             //     <View
    //             //         style={[
    //             //             column?.title
    //             //                 ? styles.cellContainer
    //             //                 : styles.cellSpace,
    //             //             column?.status === SEAT_STATUS.BLOCKED
    //             //                 ? {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.BLOCKED,
    //             //                   }
    //             //                 : column?.status === SEAT_STATUS.BOOKED
    //             //                 ? {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.BOOKED,
    //             //                   }
    //             //                 : column?.status === SEAT_STATUS.RESERVED
    //             //                 ? {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.BOOKED,
    //             //                   }
    //             //                 : column?.status === SEAT_STATUS.UNAVAILABLE
    //             //                 ? {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.UNAVAILABLE,
    //             //                   }
    //             //                 : column?.selected
    //             //                 ? {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.SELECTED,
    //             //                   }
    //             //                 : {
    //             //                       backgroundColor:
    //             //                           SEAT_LEGENDS_COLORS.AVAILABLE,
    //             //                   },
    //             //             // { backgroundColor: column?.color },
    //             //         ]}
    //             //     >
    //             //         <Text key={Date.now() + Math.random()}>
    //             //             {column?.title ? column.title : ''}
    //             //         </Text>
    //             //     </View>
    //             // </Pressable>
    //         })}
    //     </View>
    // ));

    return (
        <View style={styles.girdContainer}>
            <ScrollView horizontal>
                <Grid
                    // itemDimension={70}
                    data={data}
                    // spacing={10}
                    // horizontal={true}
                    numColumns={column}
                    keyExtractor={() => Date.now() + Math.random()}
                    renderItem={displayTabel}
                />
                {/* {render} */}
            </ScrollView>
        </View>
    );
};

export default SeatsSelectionGrid;

const styles = StyleSheet.create({
    cellContainer: {
        // width: '100%',
        // height: 200,
        // marginVertical: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        // display: 'flex',
        // padding: 1,
        paddingVertical: 3,
        paddingHorizontal: 2,
        margin: 4,
        // backgroundColor: 'cyan',
        // borderStartWidth: 5,
        borderWidth: 2,
        borderRadius: 4,
        flexDirection: 'column',
        // overflow: 'hidden',
    },
    girdContainer: {
        // backgroundColor: '#ececec',
        borderRadius: 4,
        padding: 5,
    },
    cellSpace: {
        height: 25,
        width: 20,
        margin: 4,
        borderWidth: 2,
        // backgroundColor: '#ececec',
    },
});
