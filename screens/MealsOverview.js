import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} imgUrl={itemData.item.imageUrl} />;
  }
  return (
    <View style={styles.container}>
      <Text>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverview;
