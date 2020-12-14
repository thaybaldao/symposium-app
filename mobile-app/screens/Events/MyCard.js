import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { StyleSheet} from 'react-native';
import {subscribe, unsubscribe} from "../../redux/actions";
import { connect } from 'react-redux';

class MyCard extends React.Component {
 render() {
  const { subscribe, unsubscribe} = this.props;

  return (
  <Card style={styles.container}>
    <Card.Cover source={{ uri: this.props.data.uri }} />
    <Card.Content>
      <Title style={styles.title}>{this.props.data.title}</Title>
      <Paragraph>{this.props.data.content}</Paragraph>
    </Card.Content>
    {!this.props.eventsSubscribed[this.props.id] ? (
        <TouchableOpacity style={styles.btn} onPress={ subscribe.bind(this, this.props.id) }>
          <Text style={styles.btnText} >Inscrever-se</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={ unsubscribe.bind(this, this.props.id) }>
          <Text style={styles.btnText} >Desinscrever-se</Text>
        </TouchableOpacity>
    )}
  </Card>
);
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 350,
    width: 300,
    textAlign: 'left'
  },
  title: {
    color: '#560707'
  },
  btn:{
    backgroundColor:"#560707",
    borderRadius:15,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  btnText:{
    color:"white"
  },
});

const mapStateToProps = (state) => {
  console.log(state.eventsSubscribed)
  return{
    eventsSubscribed: state.eventsSubscribed
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    subscribe: (id) => dispatch(subscribe(id)),
    unsubscribe: (id) => dispatch(unsubscribe(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
