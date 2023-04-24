import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, ScrollView, View } from 'react-native';
import { useState } from 'react';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from "./components/WeeklyForecast";
import InfoBox from './components/InfoBox';
import clouds from './assets/peakpx.jpg';

export default function App() {
  return (
    <ImageBackground style={styles.background} source={clouds}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:60 }}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.head}>
            <Text style={styles.city}>Detroit</Text>
            <Text style={styles.main_degrees}>47°</Text>
            <Text style={styles.description}>Partly Cloudy</Text>
            <Text style={styles.high_and_low}>H:67° L:47°</Text>
          </View>
          <HourlyForecast></HourlyForecast>
          <WeeklyForecast></WeeklyForecast>
          <View style={styles.info_wrapper}>
            <InfoBox name="WIND"></InfoBox>
            <InfoBox name="FEELS LIKE"></InfoBox>
          </View>
          <View style={styles.info_wrapper}>
            <InfoBox name="HUMIDITY"></InfoBox>
            <InfoBox name="PRESSURE"></InfoBox>
          </View>
        </View>
      </View>
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
    //paddingBottom: 10,
    "height": "100%",
    "width": "100%",
    overflow: "visible",
    marginTop: -4
  },
  "": {
    "boxSizing": "border-box",
    "margin": 0,
    "padding": 0
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
    height: 300,
  },
  main_degrees: {
    "position": "relative",
    "left": "2.5%",
    fontSize: 101,
    //"margin": "-27px",
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
    //"padding": "1rem",
    //"paddingTop": "5rem",
    "position": "relative",
    //"top": "6%",
  },
  head: {
    display: "flex",
    position: "relative",
    "flexDirection": "column",
    "alignItems": "center",
    marginTop: "26.25%",
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
    "left": "90%",
    "bottom": "25%"
  },
  info_wrapper: {
    "width": "97%",
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "gap": 9,
    "justifyContent": "flex-start"
  }
});
