import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList
} from 'react-native';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
function mapStateToProps(state) {
    return {

    };
}

_goBack = () => {

}
_onSearch = () => {

}
_onMore = () => {

}
class ScreenHome extends Component {
    render() {
        return (
            <Toolbar>
                <ToolbarBackAction
                    onPress={this._goBack}
                />
                <ToolbarContent
                    title="Title"
                    subtitle="Subtitle"
                />
                <ToolbarAction icon="search" onPress={this._onSearch} />
                <ToolbarAction icon="more-vert" onPress={this._onMore} />
            </Toolbar>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);