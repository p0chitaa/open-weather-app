import { Image, StyleSheet, Text, View } from 'react-native';
import humidity from '../assets/humidity.png';
import pressure from '../assets/pressure.png';
import thermometer from '../assets/thermometer.png';
import wind from '../assets/wind.png';

export default function InfoBox(props) {
    let icon = null;

    switch(props.name) {
        case "WIND":
            icon = wind;
            break;
        case "FEELS LIKE":
            icon = thermometer;
            break;
        case "HUMIDITY":
            icon = humidity;
            break;
        case "PRESSURE":
            icon = pressure;
            break;
        default:
            break;
    }

    return (
        <View style={styles.InfoBox}>
            <View style={styles.info_title_wrap}>
                <Image style={styles.icon} source={icon}></Image>
                <Text style={styles.info_title}>{props.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    InfoBox: {
        "display": "flex",
        "position": "relative",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        textAlign: "center",
        "width": "45%",
        "minHeight": "26%",
        "left": "7.5%",
        "borderRadius": 15,
        "margin": 1,
        "padding": 1,
        "backgroundColor": "rgba(40, 40, 40, .6)",
    },
    info_title: {
        "display": "flex",
        "fontSize": 13,
        "paddingLeft": 1,
        "fontWeight": "500",
        "marginLeft": 5,
        color: "rgba(224, 224, 224, 0.5)",
    },
    info_title_wrap: {
        "display": "flex",
        flexDirection: "row",
        "marginTop": 12,
        marginLeft: 16,
        "opacity": 0.5
    },
    icon: {
        height: 15,
        width: 15,
    },
});