import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
class Sponsor extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.categoryImg} source={this.props.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6
    },
    categoryImg: {
        width: windowWidth - (18 + 40),
        height: undefined,
        aspectRatio: 16/9,
        borderRadius: 5
    }
})

export default Sponsor;