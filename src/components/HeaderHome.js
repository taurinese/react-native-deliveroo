import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class HeaderHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.userIconContainer}>
             <Image style={styles.userIcon} source={require("../../assets/icons/user.png")} />
          </View>
          <Text style={[styles.text, styles.timeText]}>Maintenant</Text>
          <Text style={[styles.text, styles.addressText, styles.row]}>Rue Yves Toudic</Text>
          <View style={[styles.deliveryContainer, styles.row]}>
              <View style={styles.deliveryBtnActive}>
                <Text style={[styles.text, styles.deliveryBtnTextActive]}>Livraison</Text>
              </View>
              <View style={styles.deliveryBtnInactive}>
                <Text style={styles.text}>À emporter</Text>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00ccbc",
        padding: 20,
        paddingTop: 40
    },
    row: {
        marginBottom: 12
    },
    text: {
        color: "#FFF"
    },
    timeText: {
        fontWeight: "400",
        marginTop:10
    },
    addressText: {
        fontWeight: "600",
        fontSize: 18
    },
    userIconContainer: {
        width:40,
        height:40,        
        position: "absolute",
        top: 50,
        right:20,
        backgroundColor: "#EEE",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    userIcon: {
        width:"50%",
        height:"50%",
    },
    deliveryContainer: {
        flexDirection: "row",
        width: "50%",
        justifyContent:"space-between",
        paddingBottom: 20
    },
    deliveryBtnActive: {
        backgroundColor: "#007e8a",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 0,
        borderRadius: 15,
    },
    deliveryBtnTextActive: {
        fontWeight: "700"
    },
    deliveryBtnInactive: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 0,
        borderRadius: 15
    }
})

export default HeaderHome;