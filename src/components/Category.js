import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.categoryImg} source={this.props.image} />
          <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6
    },
    categoryImg: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    text: {
        position: "absolute",
        bottom: 5,
        left: 2,
        color: "#FFF",
        fontWeight: "800"
    }
})

export default Category;