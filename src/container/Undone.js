import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import TaskItem from "../components/TaskItem.js";

class Undone extends Component {
    static navigationOptions = {
        title: 'Undone',
    };

    changeIsDone = (taskItem) => {
        this.props.changeIsDone(taskItem);
    };

    render() {
        const {navigation} = this.props;
        const undoneTasks = navigation.getParam('undoneTasks', []);

        return (
            <View style={styles.homeStyle}>

                <FlatList
                    data={undoneTasks}
                    renderItem={({item}) => <TaskItem taskItem={item} onChange={() => this.changeIsDone(item)}/>}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Undone;