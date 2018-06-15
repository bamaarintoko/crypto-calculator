import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList
} from 'react-native';
import {Container,Content} from "native-base"
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
        let firstQuery = ""
        return (
            <Container>
                
                <Content>
                    <Text>Haloooo</Text>
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);