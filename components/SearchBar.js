import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchBar() {
    return (
        <View style={styles.bar}>
            <TextInput style={styles.search_text} placeholder="Enter a city and tap return" placeholderTextColor="rgb(224,224,224)"></TextInput>
        </View>
    );
}

const styles = StyleSheet.create ({
    bar: {
        "display": "flex",
        position: "relative",
        "flexDirection": "column",
        "justifyContent": "center",
        width: "90%",
        minHeight: "4.5%",
        "borderRadius": 10,
        "margin": 1,
        top: "5%",
        //left: "4.5%",
        "backgroundColor": "rgba(40, 40, 40, .9)",
        gap: 6
    },
    search_text: {
        "marginTop": -1,
        "paddingLeft": 1,
        marginLeft: 35,
        "fontWeight": "300",
        "fontSize": 13,
        color: "rgb(224, 224, 224)",
        opacity: 0.5,
    },
});