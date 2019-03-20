import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class TaskItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onChange}>
                <View>
                    <Text>{this.props.taskItem.taskName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default TaskItem;