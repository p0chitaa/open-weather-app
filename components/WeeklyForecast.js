import { Image, StyleSheet, Text, View } from 'react-native';
import calendar from '../assets/calendar.png';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

export default function WeeklyForecast(props) {
    return (
      <View style={styles.forecast}>
      <BlurView style={[{backgroundColor: "rgba(0, 0, 0, 0.225)"}]}>
          <View style={styles.title_wrap}>
            <Image style={styles.icon} source={calendar}></Image>
            <Text style={styles.title}>5-DAY FORECAST</Text>
          </View>
          <View style={styles.info_wrapper}>
            <View style={styles.day}>
              <Text style={styles.text}>Today</Text>
              <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon1}@2x.png`}}></Image>
              <Text style={styles.temp_text}>{props.low1}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low1)*6}, 255)`, `rgb(${parseInt(props.high1)*5}, 190, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
              <Text style={[styles.temp_text, {marginLeft: -20}]}>{props.high1}°</Text>
            </View>
            <View style={styles.day}>
              <Text style={[styles.text, {marginLeft: -5}]}>{props.day2}</Text>
              <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon2}@2x.png`}}></Image>
              <Text style={[styles.temp_text, {marginRight: -30}]}>{props.low2}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low2)*6}, 255)`, `rgb(${parseInt(props.high2)*5}, 190, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
              <Text style={[styles.temp_text, {marginRight: -25, marginLeft: -30}]}>{props.high2}°</Text>
            </View>
            <View style={styles.day}>
                <Text style={[styles.text, {marginLeft: -3}]}>{props.day3}</Text>
                <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon3}@2x.png`}}></Image>
                <Text style={[styles.temp_text, {marginRight: -30}]}>{props.low3}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low3)*6}, 255)`, `rgb(${parseInt(props.high3)*5}, 190, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
                <Text style={[styles.temp_text, {marginRight: -25, marginLeft: -30}]}>{props.high3}°</Text>
            </View>
            <View style={styles.day}>
                <Text style={[styles.text, {marginLeft: -3}]}>{props.day4}</Text>
                <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon4}@2x.png`}}></Image>
                <Text style={[styles.temp_text, {marginRight: -30}]}>{props.low4}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low4)*6}, 255)`, `rgb(${parseInt(props.high4)*5}, 190, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
                <Text style={[styles.temp_text, {marginRight: -25, marginLeft: -30}]}>{props.high4}°</Text>
            </View>
            <View style={styles.day}>
                <Text style={[styles.text, {marginLeft: -3}]}>{props.day5}</Text>
                <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon5}@2x.png`}}></Image>
                <Text style={[styles.temp_text, {marginRight: -30}]}>{props.low5}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low5)*6}, 255)`, `rgb(${parseInt(props.high5)*5}, 190, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
                <Text style={[styles.temp_text, {marginRight: -25, marginLeft: -30}]}>{props.high5}°</Text>
            </View>
            <View style={styles.day}>
                <Text style={[styles.text, {marginLeft: -3}]}>{props.day6}</Text>
                <Image style={styles.day_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon6}@2x.png`}}></Image>
                <Text style={[styles.temp_text, {marginRight: -30}]}>{props.low6}°</Text>
                <LinearGradient
                    style={[styles.temp_meter]}
                    colors={[`rgb(90, ${parseInt(props.low6)*6}, 255)`, `rgb(${parseInt(props.high6)*5}, 200, 100)`]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                />
                <Text style={[styles.temp_text, {marginRight: -25, marginLeft: -30}]}>{props.high6}°</Text>
            </View>
          </View>
      </BlurView>
      </View>
    );
}

const styles = StyleSheet.create({
    forecast: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-evenly",
        "width": "90%",
        minHeight: "45%",
        overflow: "hidden",
        marginTop: 13,
        "borderRadius": 17,
        "margin": 1,

    },
    info_wrapper: {
      marginLeft: -15,
      marginRight: 20
    },
    day: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: 17
    },
    title: {
        "display": "flex",
        "fontSize": 13,
        "fontWeight": "500",
        "marginLeft": 5,
        color: "rgb(224, 224, 224)",
    },
    icon: {
        height: 15,
        width: 15,
        opacity: 0.7,
        marginLeft: 17
    },
    title_wrap: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        "opacity": 0.7
    },
    text: {
        fontWeight: "500",
        fontSize: 18,
        color: "rgb(235, 235, 235)",
    },
    temp_text: {
        marginRight: -20,
        fontWeight: "500",
        fontSize: 18,
        color: "rgb(235, 235, 235)",
    },
    day_icon: {
        display: "flex",
        height: 50,
        width: 50,
        left: -7,
    },
    day_temp: {
        display: "flex",
    },
    temp_meter: {
        height: "10%",
        width: "30%",
        borderRadius: 13,
        "backgroundColor": "rgb(0, 0, 0)",
    },
    blur: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    /*bottom_borders {

    },*/
});