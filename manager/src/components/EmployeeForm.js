import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

class EmployeeForm extends Component {

    renderPicker(day) {
        return <Picker.Item label={day} value={day} key={day} />
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input label="Name"
                        placeholder="Jef"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        {daysOfWeek.map(day => this.renderPicker(day))}
                    </Picker>
                </CardSection>
            </View>
        );
    }
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => {

    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);