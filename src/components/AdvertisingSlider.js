import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Advertising from './Advertising';

class AdvertisingSlider extends React.Component {
    ads = [
        {
            id: 0,
            image: require("../../assets/advertisings/ad_0.png")
        },
        {
            id: 1,
            image: require("../../assets/advertisings/ad_1.png")
        },
        {
            id: 2,
            image: require("../../assets/advertisings/ad_2.png")
        }
    ];

    renderItem = ({ item }) => (
        <Advertising image={item.image} />
      );

  render() {
    return (
        <View style={{marginBottom: 20}}>
            <FlatList 
                data={this.ads}
                renderItem={this.renderItem}
                keyExtractor={item => item.id} 
                contentContainerStyle={styles.slider}
                horizontal
                showsHorizontalScrollIndicator="false"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6
    },
    slider: {
        flexDirection: "row",
        paddingHorizontal: 6
    }
})

export default AdvertisingSlider;