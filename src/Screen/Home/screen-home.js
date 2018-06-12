import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList
} from 'react-native';
function mapStateToProps(state) {
    return {

    };
}

class ScreenHome extends Component {
    render() {
        return (
            <View>
                <Text>
                    Halooo
                </Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);