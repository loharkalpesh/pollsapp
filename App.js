import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ProgressBar, RadioButton } from 'react-native-paper';

const App = () => {
  const [value, setValue] = React.useState('');
  const [isButtonPressed, setIsButtonPressed] = React.useState(false);

  const handleClick = () => {
    setIsButtonPressed(true);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.cardView}>
        <View style={{ width: '100%' }}>
          <Text style={styles.text}>What programming languages do you use during the coding interview?</Text>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={styles.radioGroup}>
            <View style={styles.radioView}>
              <RadioButton uncheckedColor='#707070' color='#6495ED' value="python" />
              <Text style={styles.text}>Python</Text>
            </View>
            <View style={styles.radioView}>
              <RadioButton uncheckedColor='#707070' color='#6495ED' value="javascript" />
              <Text style={styles.text}>JavaScript</Text>
            </View>
            <View style={styles.radioView}>
              <RadioButton uncheckedColor='#707070' color='#6495ED' value="go" />
              <Text style={styles.text}>Go</Text>
            </View>
          </RadioButton.Group>
          <View style={styles.bottomView}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text, { color: '#707070' }]}>Total Votes: 24  |</Text>
              <Text style={[styles.text, { color: '#707070', marginStart: 10 }]}>5 Days Left</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleClick}>
              <Text style={[styles.text, { color: '#fff' }]}>Vote</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.cardView, { marginTop: 20, opacity: isButtonPressed ? 1 : 0 }]}>
        <View style={{ width: '100%' }}>
          <Text style={styles.text}>What programming languages do you use during the coding interview?</Text>
          <View style={styles.resultView}>
            <Text style={styles.text}>50%</Text>
            <View style={styles.progressView}>
              <Text style={styles.text}>Python</Text>
              <ProgressBar progress={0.5} color={value === 'python' ? '#50C878' : '#6495ED'} style={styles.progressBar} />
            </View>
          </View>
          <View style={styles.resultView}>
            <Text style={styles.text}>30%</Text>
            <View style={styles.progressView}>
              <Text style={styles.text}>JavaScript</Text>
              <ProgressBar progress={0.3} color={value === 'javascript' ? '#50C878' : '#6495ED'} style={styles.progressBar} />
            </View>
          </View>
          <View style={styles.resultView}>
            <Text style={styles.text}>20%</Text>
            <View style={styles.progressView}>
              <Text style={styles.text}>Go</Text>
              <ProgressBar progress={0.2} color={value === 'go' ? '#50C878' : '#6495ED'} style={styles.progressBar} />
            </View>
          </View>

          <View style={styles.bottomView}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text, { color: '#707070' }]}>Total Votes: 24  |</Text>
              <Text style={[styles.text, { color: '#707070', marginStart: 10 }]}>5 Days Left</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  radioGroup: {
    flexDirection: 'column',
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6495ED',
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  resultView: {
    flexDirection: 'row',
    marginTop: 15,
  },
  progressView: {
    flexDirection: 'column',
    marginStart: 10,
    width: '80%',
  },
  progressBar: {
    marginTop: 5,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});