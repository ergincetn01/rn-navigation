import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imgUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image  source={{uri: imgUrl}} style={styles.img}  />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles= StyleSheet.create({
    img: {
        width: "100%", height: 200
    },
     title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
     }
})

export default MealItem;
