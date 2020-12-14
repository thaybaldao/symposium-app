import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment"

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class Clock extends React.Component {

  state={
    eventDate:moment.duration().add({days:9,hours:21,minutes:18,seconds:17}), // add 9 full days
    days:9,
    hours:21,
    mins:18,
    secs:17
  }

  componentDidMount(){
    this.updateTimer()
  }
  updateTimer=()=>{

    const x = setInterval(()=>{
      let { eventDate} = this.state

      if(eventDate <=0){
        clearInterval(x)
      } else {
        eventDate = eventDate.subtract(1,"s")
        const days = eventDate.days()
        const hours = eventDate.hours()
        const mins = eventDate.minutes()
        const secs = eventDate.seconds()

        this.setState({
          days,
          hours,
          mins,
          secs,
          eventDate
        })
      }
    },1000)

  }
  render(){
    const { days, hours, mins, secs } = this.state
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:"bold",fontSize:40,color:"#560707", marginBottom:20}}>II SMSTEM</Text>
        <Text style={{fontWeight:"bold",fontSize:30,color:"#560707", marginBottom:20}}>SAVE THE DATE</Text>
        <Text style={{fontWeight:"bold",fontSize:50,marginBottom:50, color: "#000000"}}>{`${days} : ${hours} : ${mins} : ${secs}`}</Text>
      </View>
    );
  }

}

export default Clock;
