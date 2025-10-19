import { TouchableOpacity, Text, StyleSheet } from "react-native";
// Functional Component with props
const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd", padding: 15,
        alignItems: "center", borderRadius: 30,
    },
    text: {
        fontSize: 16,
        textTransform: "uppercase", fontWeight: "bold",
    },
});

export default Button;
