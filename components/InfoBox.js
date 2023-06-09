import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import wind from '../assets/wind.png';
import compass from '../assets/compass.png';
import arrow from '../assets/arrow.png';

export default function InfoBox(props) {
    return (
        <View style={[styles.InfoBox, {backgroundColor: "rgb(0, 0, 0, 0.225)"}]}>
            <BlurView style={[{backgroundColor: "rgba(0, 0, 0, 0.225)"}]}>
            <View style={styles.info_title_wrap}>
                <Image style={styles.icon} source={wind}></Image>
                <Text style={styles.info_title}>WIND</Text>
            </View>
            <Image style={styles.compass} source={compass}></Image>
            <Image style={[styles.arrow, {transform: [{rotate: `${props.deg}deg`}]}]} source={arrow}></Image>
            <View style={styles.wind_speed}>
                <BlurView style={[{justifyContent: "center", alignItems: "center", width: 100, height: 100, backgroundColor: "rgba(0, 0, 0, 0.225)"}]}>
                    <Text style={[styles.wind_text, {fontWeight: "700", fontSize: 20}]}>{props.speed}</Text>
                    <Text style={[styles.wind_text, {marginTop: -3}]}>mph</Text>
                </BlurView>
            </View>
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
        "minHeight": "20%",
        "left": "7.5%",
        "borderRadius": 17,
        "margin": 1,
        "padding": 1,
        overflow:"hidden"
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
        top: "15%",
        left: "2.7%",
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
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 4,
        overflow: "hidden",
        zIndex: 2000
    },
    wind_text: {
        color: "rgb(235, 235, 235)",
    },
    blur: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
});