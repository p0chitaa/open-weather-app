import { Image, StyleSheet, Text, View } from 'react-native';
import calendar from '../assets/calendar.png';

export default function WeeklyForecast() {
    return (
      <View style={styles.forecast}>
          <View>
              <View style={styles.title_wrap}>
                  <Image style={styles.icon} source={calendar}></Image>
                  <Text style={styles.title}>3-DAY FORECAST</Text>
              </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    forecast: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-evenly",
        "textAlign": "center",
        "width": "90%",
        minHeight: "15.5%",
        "borderRadius": 15,
        "margin": 1,
        "backgroundColor": "rgba(40, 40, 40, .6)",
    },
    day: {
        "#display": "flex",
        "padding": "0.5rem"
    },
    title: {
        "display": "flex",
        "fontSize": 13,
        "fontWeight": "500",
        "marginLeft": 5,
        color: "rgba(224, 224, 224, 0.5)",
    },
    icon: {
        height: 15,
        width: 15,
        opacity: 0.5,
        marginLeft: 17
    },
    title_wrap: {
        display: "flex",
        flexDirection: "row",
        "marginTop": -42,
        "marginBottom": 5,
        "opacity": 0.5
    },
    /*bottom_borders {

    },*/
});