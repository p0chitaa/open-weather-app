import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import clock from '../assets/clock.png';

export default function HourlyForecast() {
    return (
            <View style={styles.hourly}>
                <View style={styles.title_wrap}>
                    <Image style={styles.icon} source={clock}></Image>
                       <Text style={styles.title}>HOURLY FORECAST</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.hour_wrap}>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                        <Text style={styles.hour_text}>bruh</Text>
                    </View>
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    hourly: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        maxWidth: "90%",
        minHeight: "15.5%",
        "borderRadius": 15,
        "margin": 1,
        "marginTop": 40,
        "backgroundColor": "rgba(40, 40, 40, .6)",
        gap: 6
    },
    title: {
        "marginTop": -1,
        "paddingLeft": 1,
        "fontWeight": "500",
        "fontSize": 13,
        color: "rgba(224, 224, 224, 0.5)",
        opacity: 0.5,
    },
    title_wrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop:12,
        gap: 5
    },
    icon: {
        height: 15,
        width: 15,
        opacity: 0.5,
        marginLeft: 17
    },
    slider: {
        "display": "flex",
        "flexDirection": "row",
        "gap": "25px"
    },
    hour_wrap: {
        display: "flex",
        flexDirection: "row",
        gap: 30,
        marginLeft: 17
    },
    hour_text: {
        fontWeight: "100",
        color: "rgb(224, 224, 224)",
    }
})