import React, { Component, setState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Category from './Category';

class CategoriesSlider extends React.Component {
    categories = [
        {
            id: 0,
            text: "Offres",
            image: require("../../assets/categories/offers.png")
        },
        {
            id: 1,
            text: "Courses",
            image: require("../../assets/categories/grocery.png")
        },
        {
            id: 2,
            text: "Burgers",
            image: require("../../assets/categories/burgers.png")
        },
        {
            id: 3,
            text: "Pizzas",
            image: require("../../assets/categories/pizza.png")
        },
        {
            id: 4,
            text: "Petit déj...",
            image: require("../../assets/categories/acai.png")
        }
    ];

    renderItem = ({ item }) => (
        <Category text={item.text} image={item.image} />
      );

    render() {
        return (
        <View style={{marginBottom: 20}}>
            <FlatList 
            data={this.categories}
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
    slider: {
        flexDirection: "row",
        paddingHorizontal: 6
    }
})

export default CategoriesSlider;
