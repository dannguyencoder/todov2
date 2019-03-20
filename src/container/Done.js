import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import TaskItem from "../components/TaskItem.js";

class Done extends Component {
    static navigationOptions = {
        title: 'Done',
    };


    changeIsDone = (taskItem) => {
        this.props.changeIsDone(taskItem);
    };

    render() {
        const { navigation } = this.props;
        const doneTasks = navigation.getParam('doneTasks', []);

        return (
            <View style={styles.homeStyle}>

                <FlatList
                    data={doneTasks}
                    renderItem={({item}) => <TaskItem taskItem={item} onChange={() =>this.changeIsDone(item)}/>}/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Done')}>
                    <Text>Home Screen</Text>
                </TouchableOpacity>
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

export default Done;