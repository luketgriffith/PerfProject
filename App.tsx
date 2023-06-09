/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {CalendarList} from 'react-native-calendars';

const INITIAL_DATE = '2023-06-09';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';


const Day = ({data}) => {

  const isSelected = data?.isSelected;

  return (
    <View style={styles.day}>
      <Text style={styles.dayText}>{data.date.day}</Text>
      {isSelected && <Text>Selected</Text>}
    </View>
  );
};

function App(): JSX.Element {
  const [showCalendar, setShowCalendar] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
            <Text>{showCalendar ? 'Hide' : 'Show'} Calendar</Text>
          </TouchableOpacity>
        </View>
        {showCalendar && (
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <CalendarList
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350,
              }}
              dayComponent={data => <Day data={data} />}
              // Specify the current date
              current={'2023-06-09'}
              // Callback that gets called when the user selects a day
              onDayPress={day => {
                console.log('selected day', day);
              }}
              // Mark specific dates as marked
              markedDates={{
                '2012-03-01': {
                  selected: true,
                  marked: true,
                  selectedColor: 'blue',
                },
                '2012-03-02': {marked: true},
                '2012-03-03': {
                  selected: true,
                  marked: true,
                  selectedColor: 'blue',
                },
              }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 15,
    justifyContent: 'center'
  },
  day: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 18,
    fontWeight: '400',
  },
  calendar: {
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
