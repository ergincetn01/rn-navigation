import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress, navigation }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.btn,
          pressed ? styles.btnpressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
  },
  btnpressed: {
    opacity: 0.5,
  },
  gridItem: {
    flex: 1,
    height: 160,
    width: 160,
    margin: 6,
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 1,
    backgroundColor: "white",
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
