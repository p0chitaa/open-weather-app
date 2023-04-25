import { Image, StyleSheet, Text, View } from 'react-native';
import humidity from '../assets/humidity.png';
import { BlurView } from 'expo-blur';

export default function HumidityInfo(props) {
    return (
        <View style={styles.InfoBox}>
            <BlurView style={[{backgroundColor: "rgba(0, 0, 0, 0.225)", height: 180}]}>
            <View style={styles.info_title_wrap}>
                <Image style={styles.icon} source={humidity}></Image>
                <Text style={styles.info_title}>HUMIDITY</Text>
            </View>
            <Text style={styles.humidity}>{props.humidity}%</Text>
            </BlurView>
        </View>
    );
}

const styles = StyleSheet.create({
    InfoBox: {
        "display": "flex",
        "position": "relative",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "width": "45%",
        "minHeight": "26%",
        "left": "7.5%",
        "borderRadius": 13,
        "margin": 1,
        "padding": 1,
        overflow: "hidden"
    },
    info_title: {
        "display": "flex",
        "fontSize": 13,
        "paddingLeft": 1,
        "fontWeight": "500",
        "marginLeft": 5,
        color: "rgb(224, 224, 224)",
    },
    info_title_wrap: {
        "display": "flex",
        flexDirection: "row",
        "marginTop": 12,
        marginLeft: 16,
        "opacity": 0.7
    },
    icon: {
        height: 15,
        width: 15,
    },
    compass: {
        display: "flex",
        position: "relative",
        height:150,
        width: 170,
        left: "2%",
        alignItems: "center",
        justifyContent:"center",
        opacity: 0.7,
    },
    arrow: {
        display: "flex",
        position: "absolute",
        height:160,
        width: 170,
        top: "22%",
        transform: [{rotate: "0.5deg"}],
        left: "2.25%",
        alignItems: "center",
        justifyContent:"center",
        zIndex: 50
    },
    wind_speed: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderRadius: 30,
        width: "35%",
        height:"35%",
        left: "32.5%",
        bottom: "25%",
        "backgroundColor": "rgba(120, 120, 120, 0.8)",
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex: 2000
    },
    wind_text: {
        color: "rgb(235, 235, 235)",
    },
    blur: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    humidity: {
        color: "rgb(224, 224, 224)",
        fontSize: 35,
        left: 16,
        top: 5
    }
});