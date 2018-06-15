import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList
} from 'react-native';
import { Container, Content, Item, Input, Button } from "native-base"
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
                    <View style={{backgroundColor:'blue',height:60}}>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor:'#FFF', marginLeft:30, marginRight:30,marginTop:10, borderRadius:5 }}>
                        <View style={{ width: 30 + '%' }}>

                            <Button full info style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                                <Text>IDR</Text>
                            </Button>
                        </View>
                        <View style={{ width: 70 + '%' }}>
                            <Item regular style={{ borderColor: '#FFF', backgroundColor: '#FFF', height:45 }}>
                                <Input style={{fontSize:14}} placeholder='Regular Textbox' />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor:'#FFF', margin:30 }}>
                        <View style={{ width: 30 + '%' }}>

                            <Button full info style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                                <Text>BTC</Text>
                            </Button>
                        </View>
                        <View style={{ width: 70 + '%' }}>
                            <Item regular style={{ borderColor: '#FFF', backgroundColor: '#FFF', height:45 }}>
                                <Input style={{fontSize:14}} placeholder='Regular Textbox' />
                            </Item>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenHome);