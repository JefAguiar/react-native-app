import  React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import  LoginForm  from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {
    state = {
      loggedIn : null
    };

    componentWillMount(){
        let config = {
            apiKey: "AIzaSyA2zSuZI1_-CQO9PrX8ehsdnW9REvmtcnM",
            authDomain: "authentication-d7517.firebaseapp.com",
            databaseURL: "https://authentication-d7517.firebaseio.com",
            projectId: "authentication-d7517",
            storageBucket: "authentication-d7517.appspot.com",
            messagingSenderId: "322368433324"
          };

        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user => {
           if(user){
               this.setState({
                 loggedIn: true
               });
           }
           else {
            this.setState({
              loggedIn: false
            });
           }
        });
    } 

    renderContent(){
        switch(this.state.loggedIn)
        {
            case true:
              return (
                <CardSection>
                  <Button 
                  onPress={() => firebase.auth().signOut()}
                >
                Log Out
                </Button>
                </CardSection>
                
              );
            case false:
              return <LoginForm />;
            default:
              return <Spinner size="large" />;
        } 
    }

    render(){
        return(
          <View>
              <Header headerText="Authentication" />
              {this.renderContent()}
          </View>
        );
    }
}

export default App;