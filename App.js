import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Keyboard, StyleSheet, Text, ScrollView, View, TextInput, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from "./components/WeeklyForecast";
import InfoBox from './components/InfoBox';
import search from './assets/search.png';
import clouds from './assets/peakpx.jpg';
import axios from 'axios';
import * as Location from 'expo-location';
import { BlurView } from 'expo-blur';
import { API_KEY } from '@env';
import FeelsLikeInfo from "./components/FeelsLikeInfo";
import HumidityInfo from "./components/HumidityInfo";
import PressureInfo from "./components/PressureInfo";


//const foregroundPermission = await Location.requestForegroundPermissionsAsync()
export default function App() {
  const [ data, setData ] = useState({});
  const [ forecastData, setForecastData ] = useState({});
  const [ location, setLocation ] = useState('');

  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`;
  const currentForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=imperial`;

  const getDayOfWeek = (d) => {
    const date = new Date(d)
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
    return weekday[date.getDay()]
  }

  const searchLocation = () => {
    axios.get(currentWeather).then((response) => {
        setData(response.data);
      })

    axios.get(currentForecast).then((response) => {
      setForecastData(response.data);
    })

    Keyboard.dismiss()
  }

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()

      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync();

        const initialWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${API_KEY}&units=imperial`;
        const initialForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${API_KEY}&units=imperial`;
        const getCurrentLocation = () => {
          axios.get(initialWeather).then((response) => {
            setData(response.data);
          }) .catch((error) => {
            console.log(error)
          })
        }

        const getCurrentForecast = () => {
          axios.get(initialForecast).then((response) => {
            setForecastData(response.data);
          }) .catch((error) => {
            console.log(error)
          })
        }
        getCurrentLocation();
        getCurrentForecast();
      } else {

      }
    })();
  }, []);

  return (
    <ImageBackground style={styles.background} source={clouds}>
      <StatusBar
          style="light"
      />
      <View style={styles.search_hider}></View>
      <ScrollView contentInset={{ top:50 }} showsVerticalScrollIndicator={false} keyboardDismissMode='on-drag' style={{position: 'relative'}}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View
              style={[styles.bar]}
              location={setLocation}
          >
            <BlurView style={styles.blur}>
              <Image style={styles.search_icon} source={search}></Image>
              <TextInput
                  //value={location}
                  style={styles.search_text}
                  onChangeText={(text) => {setLocation(text)}}
                  returnKeyType="go"
                  placeholder="Search for a city and tap return"
                  placeholderTextColor="rgb(224,224,224)"
                  onSubmitEditing={()=>searchLocation()}
              />
            </BlurView>
          </View>
          <View style={styles.head}>
            {data.name ?
                <Text style={styles.city}>{data.name}</Text>
            :
                null
            }
            {data.main ?
                <Text style={styles.main_degrees}>
                  {data.main.temp.toFixed()}°
                </Text>
            :
                <Text style={[styles.main_degrees, {marginLeft: -15}]}>
                  --
                </Text>
            }
            {data.weather ?
              <Text style={styles.description}>
                {data.weather[0].main}
              </Text>
            : null
            }
            {data.main ?
                <Text style={styles.high_and_low}>
                  H:{data.main.temp_max.toFixed()}° L:{data.main.temp_min.toFixed()}°
                </Text>
                : null
            }
          </View>
          {forecastData.list ?
              <HourlyForecast
                  icon1={data.weather[0].icon}
                  temp1={data.main.temp.toFixed()}

                  time2={forecastData.list[0].dt_txt.substring(11,13)}
                  icon2={forecastData.list[0].weather[0].icon}
                  temp2={forecastData.list[0].main.temp.toFixed()}

                  time3={forecastData.list[1].dt_txt.substring(11,13)}
                  icon3={forecastData.list[1].weather[0].icon}
                  temp3={forecastData.list[1].main.temp.toFixed()}

                  time4={forecastData.list[2].dt_txt.substring(11,13)}
                  icon4={forecastData.list[2].weather[0].icon}
                  temp4={forecastData.list[2].main.temp.toFixed()}

                  time5={forecastData.list[3].dt_txt.substring(11,13)}
                  icon5={forecastData.list[3].weather[0].icon}
                  temp5={forecastData.list[3].main.temp.toFixed()}

                  time6={forecastData.list[4].dt_txt.substring(11,13)}
                  icon6={forecastData.list[4].weather[0].icon}
                  temp6={forecastData.list[4].main.temp.toFixed()}

                  time7={forecastData.list[5].dt_txt.substring(11,13)}
                  icon7={forecastData.list[5].weather[0].icon}
                  temp7={forecastData.list[5].main.temp.toFixed()}

                  time8={forecastData.list[6].dt_txt.substring(11,13)}
                  icon8={forecastData.list[6].weather[0].icon}
                  temp8={forecastData.list[6].main.temp.toFixed()}

                  time9={forecastData.list[7].dt_txt.substring(11,13)}
                  icon9={forecastData.list[7].weather[0].icon}
                  temp9={forecastData.list[7].main.temp.toFixed()}

                  time10={forecastData.list[8].dt_txt.substring(11,13)}
                  icon10={forecastData.list[8].weather[0].icon}
                  temp10={forecastData.list[8].main.temp.toFixed()}

                  time11={forecastData.list[9].dt_txt.substring(11,13)}
                  icon11={forecastData.list[9].weather[0].icon}
                  temp11={forecastData.list[9].main.temp.toFixed()}

                  time12={forecastData.list[10].dt_txt.substring(11,13)}
                  icon12={forecastData.list[10].weather[0].icon}
                  temp12={forecastData.list[10].main.temp.toFixed()}

                  time13={forecastData.list[11].dt_txt.substring(11,13)}
                  icon13={forecastData.list[11].weather[0].icon}
                  temp13={forecastData.list[11].main.temp.toFixed()}

                  time14={forecastData.list[12].dt_txt.substring(11,13)}
                  icon14={forecastData.list[12].weather[0].icon}
                  temp14={forecastData.list[12].main.temp.toFixed()}

                  time15={forecastData.list[13].dt_txt.substring(11,13)}
                  icon15={forecastData.list[13].weather[0].icon}
                  temp15={forecastData.list[13].main.temp.toFixed()}

                  time16={forecastData.list[14].dt_txt.substring(11,13)}
                  icon16={forecastData.list[14].weather[0].icon}
                  temp16={forecastData.list[14].main.temp.toFixed()}

                  time17={forecastData.list[15].dt_txt.substring(11,13)}
                  icon17={forecastData.list[15].weather[0].icon}
                  temp17={forecastData.list[15].main.temp.toFixed()}

                  time18={forecastData.list[16].dt_txt.substring(11,13)}
                  icon18={forecastData.list[16].weather[0].icon}
                  temp18={forecastData.list[16].main.temp.toFixed()}

                  time19={forecastData.list[17].dt_txt.substring(11,13)}
                  icon19={forecastData.list[17].weather[0].icon}
                  temp19={forecastData.list[17].main.temp.toFixed()}

                  time20={forecastData.list[18].dt_txt.substring(11,13)}
                  icon20={forecastData.list[18].weather[0].icon}
                  temp20={forecastData.list[18].main.temp.toFixed()}

                  time21={forecastData.list[19].dt_txt.substring(11,13)}
                  icon21={forecastData.list[19].weather[0].icon}
                  temp21={forecastData.list[19].main.temp.toFixed()}

                  time22={forecastData.list[20].dt_txt.substring(11,13)}
                  icon22={forecastData.list[20].weather[0].icon}
                  temp22={forecastData.list[20].main.temp.toFixed()}

                  time23={forecastData.list[21].dt_txt.substring(11,13)}
                  icon23={forecastData.list[21].weather[0].icon}
                  temp23={forecastData.list[21].main.temp.toFixed()}

                  time24={forecastData.list[22].dt_txt.substring(11,13)}
                  icon24={forecastData.list[22].weather[0].icon}
                  temp24={forecastData.list[22].main.temp.toFixed()}

                  time25={forecastData.list[23].dt_txt.substring(11,13)}
                  icon25={forecastData.list[23].weather[0].icon}
                  temp25={forecastData.list[23].main.temp.toFixed()}
              />
              : null
          }

          {forecastData.list ?
            <WeeklyForecast
              icon1={data.weather[0].icon}
              low1={data.main.temp_min.toFixed()}
              high1={data.main.temp_max.toFixed()}

              day2={getDayOfWeek(forecastData.list[8].dt_txt.substring(0,10)).substring(0,3)}
              icon2={forecastData.list[8].weather[0].icon}
              low2={forecastData.list[8].main.feels_like.toFixed()}
              high2={forecastData.list[8].main.temp_max.toFixed()}

              day3={getDayOfWeek(forecastData.list[16].dt_txt.substring(0,10)).substring(0,3)}
              icon3={forecastData.list[16].weather[0].icon}
              low3={forecastData.list[16].main.feels_like.toFixed()}
              high3={forecastData.list[16].main.temp_max.toFixed()}

              day4={getDayOfWeek(forecastData.list[24].dt_txt.substring(0,10)).substring(0,3)}
              icon4={forecastData.list[24].weather[0].icon}
              low4={forecastData.list[24].main.feels_like.toFixed()}
              high4={forecastData.list[24].main.temp_max.toFixed()}

              day5={getDayOfWeek(forecastData.list[32].dt_txt.substring(0,10)).substring(0,3)}
              icon5={forecastData.list[32].weather[0].icon}
              low5={forecastData.list[32].main.feels_like.toFixed()}
              high5={forecastData.list[32].main.temp_max.toFixed()}

              day6={getDayOfWeek(forecastData.list[39].dt_txt.substring(0,10)).substring(0,3)}
              icon6={forecastData.list[39].weather[0].icon}
              low6={forecastData.list[39].main.feels_like.toFixed()}
              high6={forecastData.list[39].main.temp_max.toFixed()}
            />
            : null
          }
          {data.wind ?
          <View style={styles.info_wrapper}>
            <InfoBox
                name="WIND"
                speed={data.wind.speed.toFixed()}
                deg={data.wind.deg}
            />
            <FeelsLikeInfo
                name="FEELS LIKE"
                temp={data.main.feels_like.toFixed()}
            />
          </View>
          : null
          }
          {data.main ?
          <View style={styles.info_wrapper}>
            <HumidityInfo
                name="HUMIDITY"
                humidity={data.main.humidity}
            />
            <PressureInfo
                name="PRESSURE"
                pressure={data.main.pressure}
            />
          </View>
          : null
          }
        </View>
      </View>
      <View style={styles.blank}></View>
      <View style={styles.blank}></View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    "flex": 1,
    flexDirection: "column",
    "position": "relative",
    paddingBottom: 10,
    "height": "100%",
    "width": "100%",
    overflow: "visible",
    top: -80,
  },
  "": {
    "boxSizing": "border-box",
    "margin": 0,
    "padding": 0
  },
  search_bar: {
    position: "absolute",
    top: 0,
    marginTop: 90
  },
  body: {
    "margin": "0",
    "fontFamily": "'Inter', 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "fontWeight": 100
  },
  code: {
    "fontFamily": "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace"
  },
  blank: {
    height: 230,
  },
  search_hider: {
    position: "relative",
    marginTop: 30,
    height: 60,
  },
  main_degrees: {
    "position": "relative",
    "left": "2.5%",
    fontSize: 101,
    fontWeight: "200",
    color: "rgb(224, 224, 224)",
    textShadowColor: 'rgba(50, 50, 50, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  background: {
    "position": "absolute",
    "height": "100%",
    "width": "100%",
    "top": 0,
    "left": 0,
    "zIndex": -1
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    "height": 700,
    "margin": "auto",
    "gap": 10,
    "position": "relative",
  },
  head: {
    display: "flex",
    position: "relative",
    "flexDirection": "column",
    "alignItems": "center",
    marginTop: 50,
    gap: -10,
  },
  description: {
    fontSize: 20,
    color: "rgb(224, 224, 224)",
    fontWeight: "500",
    textShadowColor: 'rgba(50, 50, 50, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  city: {
    "fontWeight": "500",
    fontSize: 30,
    "color": "rgb(224, 224, 224)",
    textShadowColor: 'rgba(50, 50, 50, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  high_and_low: {
    fontSize: 20,
    fontWeight: "500",
    color: "rgb(224, 224, 224)",
    marginTop: 12,
    textShadowColor: 'rgba(50, 50, 50, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  footer: {
    "position": "absolute",
    "top": "84.5%",
    "display": "flex",
    "height": "45px",
    "width": "100%",
    "padding": "1rem",
    "backgroundColor": "rgba(50, 50, 50, 0.8)"
  },
  search_icon: {
    "position": "absolute",
    width: 18,
    height: 18,
    top: 7,
    left: 8,
    opacity: 0.7
  },
  info_wrapper: {
    "width": "97%",
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "gap": 9,
    "justifyContent": "flex-start"
  },
  bar: {
    top: 33,
    "display": "flex",
    position: "relative",
    "flexDirection": "column",
    "justifyContent": "center",
    width: "90%",
    minHeight: "4%",
    "borderRadius": 7,
    "margin": 1,
    overflow: "hidden",
    gap: 6
  },
  blur: {
    height: 32,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  search_text: {
    "paddingLeft": 1,
    marginTop: 6,
    marginLeft: 32,
    "fontWeight": "400",
    "fontSize": 16,
    color: "rgb(224, 224, 224)",
    opacity: 0.7,
  },
});
