import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

const LoginForm = (props) => {

    const onButtonPress = () => {

        props.setLoading();

        props.loginUser(props.userLogin.email, props.userLogin.password);

    };

    const renderButton = () => {
        if (props.userLogin.loading)
            return <Spinner size="small" />;

        return <Button onPress={() => onButtonPress()}>Log in</Button>

    };

    return (
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="user@gmail.com"
                    value={props.userLogin.email}
                    onChangeText={email => props.setEmail(email)}
                />
            </CardSection>
            <CardSection>
                <Input
                    label="Password"
                    value={props.userLogin.password}
                    onChangeText={password => props.setPassword(password)}
                    secureTextEntry
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {props.userLogin.error}
            </Text>
            <CardSection>
                {renderButton()}
            </CardSection>
        </Card>
    );
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin
    };
};

export default connect(mapStateToProps, actions)(LoginForm);