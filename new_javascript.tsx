/*import { Button, OverflowMenu, OverflowMenuItemType } from '@ui-kitten/components';*/
/*import React from 'react';*/
/*import {
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    ToastAndroid
} from 'react-native';*/

const SignUp = () => {
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [password2, setPassword2] = React.useState<string>();
    const [salute, setSalute] = React.useState<string>();
    const [name, setName] = React.useState<string>();
    const [idNo, setIdNo] = React.useState<string>();
    const [NHIFNo, setNHIFNo] = React.useState<string>();
    const [cell, setCell] = React.useState<string>();
    const [gender, setGender] = React.useState<string>();
    const [school, setSchool] = React.useState<string>();
    const [addrPoBox, setAddrPoBox] = React.useState<string>();
    const [addrPostalCode, setAddrPostalCode] = React.useState<string>();
    const [addrDistrict, setAddrDistrict] = React.useState<string>();
    const [addrCounty, setAddrCounty] = React.useState<string>();
    const [addrNation, setAddrNation] = React.useState<string>();

    const [visible, setVisible] = React.useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(null);

    const menuItems: OverflowMenuItemType[] = [
        { title: "Elimu Nairobi Academy" },
        { title: "Silver Bells Academy", disabled: true },
    ];


    const onSelect = (index: number): void => {
        ToastAndroid.show(
            "School Selected",
            ToastAndroid.LONG
        );
        setSelectedIndex(index);
        toggleMenu();
    };

    const toggleMenu = (): void => {
        setVisible(!visible);
    };

    const renderMenuAction = () => (
        <OverflowMenu
            visible={visible}
            data={menuItems}
            placement="bottom start"
            onSelect={onSelect}
            selectedIndex={selectedIndex}
            onBackdropPress={toggleMenu}
        >
            <TouchableOpacity
                style={styles.btn}
                onPress={toggleMenu}
            >
                <Text style={styles.btnCont}> Choose School </Text>
            </TouchableOpacity>
        </OverflowMenu>
    );

    const SignUpAction = () => {
        console.log("Email: ", email)
        console.log("Password: ", password)
        console.log("Salute: ", salute)
        console.log("Name: ", name)
        console.log("ID No.: ", idNo)
        console.log("NHIF No.: ", NHIFNo)
        console.log("Cell: ", cell)
        console.log("Gender: ", gender)
        console.log("School: ", school)
        console.log("P.O Box: ", addrPoBox)
        console.log("Postal Code: ", addrPostalCode)
        console.log("Town: ", addrDistrict)
        console.log("County: ", addrCounty)
        console.log("Nation: ", addrNation)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView style={styles.scrollView}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Sign Up For A New RESS Account</Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#d4d4d4"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#d4d4d4"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#d4d4d4"
                            secureTextEntry={true}
                            value={password2}
                            onChangeText={setPassword2}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Salute"
                            placeholderTextColor="#d4d4d4"
                            value={salute}
                            onChangeText={setSalute}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="#d4d4d4"
                            value={name}
                            onChangeText={setName}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="ID Number"
                            placeholderTextColor="#d4d4d4"
                            value={idNo}
                            onChangeText={setIdNo}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="NHIF Number"
                            placeholderTextColor="#d4d4d4"
                            value={NHIFNo}
                            onChangeText={setNHIFNo}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Cell Number"
                            placeholderTextColor="#d4d4d4"
                            value={cell}
                            onChangeText={setCell}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Gender"
                            placeholderTextColor="#d4d4d4"
                            value={gender}
                            onChangeText={setGender}
                            style={styles.textInput}
                        />
                        {/* <TextInput
              placeholder="School"
              placeholderTextColor="#d4d4d4"
              value={school}
              onChangeText={setSchool}
              style={styles.textInput}
            /> */}
                        {renderMenuAction()}
                        <TextInput
                            placeholder="P.O Box"
                            placeholderTextColor="#d4d4d4"
                            value={addrPoBox}
                            onChangeText={setAddrPoBox}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Postal Code"
                            placeholderTextColor="#d4d4d4"
                            value={addrPostalCode}
                            onChangeText={setAddrPostalCode}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Town"
                            placeholderTextColor="#d4d4d4"
                            value={addrDistrict}
                            onChangeText={setAddrDistrict}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="County"
                            placeholderTextColor="#d4d4d4"
                            value={addrCounty}
                            onChangeText={setAddrCounty}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Nation"
                            placeholderTextColor="#d4d4d4"
                            value={addrNation}
                            onChangeText={setAddrNation}
                            style={styles.textInput}
                        />
                        <View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => SignUpAction()}
                            >
                                <Text style={styles.btnContainer}> Sign In </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: '#152238',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
        color: '#d4d4d4'
    },
    textInput: {
        height: 40,
        borderColor: "#d4d4d4",
        color: "#d4d4d4",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        color: "#d4d4d4",
    },
    btnCont: {
        color: "#d4d4d4",
        textAlign: "left",
        alignItems: "flex-start",
        alignContent: "flex-start"
    },
    scrollView: {
        backgroundColor: '#152238',
        marginHorizontal: 0,
    },
    btn: {
        backgroundColor: "#23395d",
        alignItems: "center",
        padding: 10
    }
});

export default SignUp;


