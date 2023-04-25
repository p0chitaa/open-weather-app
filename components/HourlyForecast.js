import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import clock from '../assets/clock.png';
import { BlurView } from 'expo-blur';

export default function HourlyForecast(props) {
    //const getIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
            <View style={{overflow: "hidden",borderRadius: 17, marginTop: 45, marginBottom: -14}}>
            <BlurView style={[styles.hourly, {backgroundColor: "rgba(0, 0, 0, 0.225)"}]}>
                <View style={styles.title_wrap}>
                    <Image style={styles.icon} source={clock}></Image>
                       <Text style={styles.title}>HOURLY FORECAST</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.hour_wrap}>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>Now</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon1}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp1}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time2}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon2}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp2}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time3}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon3}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp4}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time4}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon4}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp4}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time5}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon5}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp5}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time6}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon6}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp6}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time7}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon7}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp7}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time8}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon8}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp8}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time9}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon9}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp9}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time10}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon10}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp10}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time11}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon11}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp11}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time12}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon12}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp12}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time13}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon13}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp13}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time14}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon14}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp14}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time15}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon15}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp15}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time16}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon16}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp16}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time17}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon17}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp17}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time18}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon18}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp18}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time19}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon19}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp19}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time20}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon20}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp20}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time21}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon21}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp21}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time22}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon22}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp22}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time23}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon23}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp23}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time24}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon24}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp24}°</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text style={styles.hour_text}>{props.time25}</Text>
                            <Image style={styles.hour_icon} source={{uri:`https://openweathermap.org/img/wn/${props.icon25}@2x.png`}}></Image>
                            <Text style={styles.temp_text}>{props.temp25}°</Text>
                        </View>
                    </View>
                </ScrollView>
            </BlurView>
            </View>
    );
}

const styles = StyleSheet.create({
    hourly: {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        maxWidth: "90%",
        minHeight: "20%",
        "borderRadius": 13,
        "margin": 1,
        //"marginTop": 40,
        "backgroundColor": "rgba(120, 120, 120, .6)",
        gap: 6,
    },
    title: {
        "marginTop": -1,
        "paddingLeft": 1,
        "fontWeight": "500",
        "fontSize": 13,
        color: "rgb(224, 224, 224)",
        opacity: 0.7,
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
        opacity: 0.7,
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
        gap: 10,
        marginLeft: 17,
        marginTop: 5,
        marginRight: 15
    },
    hour_text: {
        fontWeight: "600",
        fontSize: 15,
        color: "rgb(235, 235, 235)",
    },
    temp_text: {
        fontWeight: "500",
        fontSize: 18,
        color: "rgb(235, 235, 235)",
    },
    hour: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    hour_icon: {
        height: 50,
        width: 50,
        //left: -7
    },
    /*blur: {
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },*/
})