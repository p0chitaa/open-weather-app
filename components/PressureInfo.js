import { Image, StyleSheet, Text, View } from 'react-native';
import pressure from '../assets/pressure.png';
import pressuremeter from '../assets/pressuremeter.png';
import up from '../assets/up.png'
import { BlurView } from 'expo-blur';

export default function PressureInfo(props) {
    let firstPressure = props.pressure;
    let finalPressure = (parseInt(firstPressure)/33.863886666667).toFixed(2);
    return (
        <View style={styles.InfoBox}>
            <BlurView style={[{backgroundColor: "rgba(0, 0, 0, 0.225)", height: 180}]}>
            <View style={styles.info_title_wrap}>
                <Image style={styles.icon} source={pressure}></Image>
                <Text style={styles.info_title}>PRESSURE</Text>
            </View>
            <View style={styles.pressure_wrap}>
                <Image style={styles.pressuremeter} source={pressuremeter}></Image>
                <Image style={styles.up_arrow} source={up}></Image>
                <Text style={styles.pressure}>{finalPressure}</Text>
                <Text style={styles.units}>inHg</Text>
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
        "minHeight": "26%",
        "left": "7.5%",
        "borderRadius": 13,
        "margin": 1,
        "padding": 1,
        //"backgroundColor": "rgba(120, 120, 120, .6)",
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
    blur: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    pressure: {
        color: "rgb(224, 224, 224)",
        fontSize: 21,
        fontWeight: "600",
        //left: 16,
        top: -35,
        zIndex: 200
    },
    pressure_wrap: {
        display: "flex",
        alignItems: "center",
    },
    pressuremeter: {
        display: "flex",
        position: "relative",
        top: 15,
        height:100,
        width: 130,
        //top: "%",
        //left: "2%",
        alignItems: "center",
        justifyContent:"center",
        opacity: 0.7,
    },
    units: {
        fontSize: 16,
        fontWeight: "500",
        color: "rgb(224, 224, 224)",
        top: -35
    },
    up_arrow: {
        position: "absolute",
        top: 40,
        height:20,
        width: 20,
    }
});