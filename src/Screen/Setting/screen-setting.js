import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, List, ListItem, Text, Right, Radio, Left, View,Button } from 'native-base';
import { withNavigation } from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome';
function mapStateToProps(state) {
    return {

    };
}

class ScreenSetting extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#FFF' }}>

                <Content>
                    <View style={{ backgroundColor: '#1565C0', height: 60, alignContent:'center', justifyContent:'center' }}>
                        <Button transparent light style={{ padding: 15 }}>
                            <Icon name="arrow-left" size={20} color="#FFF" />
                        </Button>

                    </View>
                    <List>
                        <ListItem onPress={() => console.log("aaa")} selected={true}>
                            <Left style={{ alignContent: 'center' }}>
                                <View style={{ height: 30, width: 30, backgroundColor: '#D50000' }}>

                                </View>
                                <Text>{" "}#D50000</Text>
                            </Left>
                            <Right style={{ justifyContent: 'flex-end' }}>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#C51162' }}>

                                </View>
                                <Text>{" "}#C51162</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#AA00FF' }}>

                                </View>
                                <Text>{" "}#AA00FF</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#BF360C' }}>

                                </View>
                                <Text>{" "}#BF360C</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#3E2723' }}>

                                </View>
                                <Text>{" "}#3E2723</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#76FF03' }}>

                                </View>
                                <Text>{" "}#76FF03</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <View style={{ height: 30, width: 30, backgroundColor: '#1565C0' }}>

                                </View>
                                <Text>{" "}#1565C0</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const screen = withNavigation(ScreenSetting)
export default connect(
    mapStateToProps,
)(screen);