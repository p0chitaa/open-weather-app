import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import thermometer from '../assets/thermometer.png';

export default function FeelsLikeInfo(props) {
    return (
        <View style={styles.InfoBox}>
            <BlurView style={[{backgroundColor: "rgba(0, 0, 0, 0.225)", height: 178}]}>
            <View style={styles.info_title_wrap}>
                <Image style={styles.icon} source={thermometer}></Image>
                <Text style={styles.info_title}>FEELS LIKE</Text>
            </View>
            <Text style={styles.feels_temp}>{props.temp}°</Text>
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
        //"backgroundColor": "rgba(120, 120, 120, .6)",
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
    blur: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    feels_temp: {
        color: "rgb(224, 224, 224)",
        fontSize: 35,
        left: 16,
        top: 5
    }
});