import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList, StatusBar
} from 'react-native';
import {withNavigation} from "react-navigation"
import { Container, Content, Item, Input, Button } from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
function mapStateToProps(state) {
    return {

    };
}

class ScreenHome extends Component {
    _onSetting=()=>{
        return ()=>{
            this.props.navigation.navigate("Setting")
            // console.log("-->",this.props)
        }
    }
    render() {
        let firstQuery = ""
        return (
            <Container style={{ backgroundColor: '#1565C0' }}>
                <StatusBar
                    backgroundColor="#1565C0"
                    barStyle="light-content"
                />
                <Content>
                    <View style={{ backgroundColor: '#1565C0', height: 60, alignSelf: 'flex-end' }}>
                        <Button transparent light style={{ padding: 15 }} onPress={this._onSetting()}>
                            <Icon name="cog" size={20} color="#FFF" />
                        </Button>

                    </View>
                    <View style={{ height: 200 }}>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFF', marginLeft: 30, marginRight: 30, marginTop: 10, borderRadius: 5 }}>
                        <View style={{ width: 30 + '%' }}>

                            <Button full info style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                                <Text>IDR</Text>
                            </Button>
                        </View>
                        <View style={{ width: 70 + '%' }}>
                            <Item regular style={{ borderColor: '#FFF', backgroundColor: '#FFF', height: 45 }}>
                                <Input style={{ fontSize: 14 }} placeholder='Regular Textbox' />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFF', margin: 30, borderRadius: 5 }}>
                        <View style={{ width: 30 + '%' }}>

                            <Button full info style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                                <Text>BTC</Text>
                            </Button>
                        </View>
                        <View style={{ width: 70 + '%' }}>
                            <Item regular style={{ borderColor: '#FFF', backgroundColor: '#FFF', height: 45 }}>
                                <Input style={{ fontSize: 14 }} placeholder='Regular Textbox' />
                            </Item>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}
const screen = withNavigation(ScreenHome)
export default connect(
    mapStateToProps,
)(screen);