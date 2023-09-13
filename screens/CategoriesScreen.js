import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {  
    function handlePress() {
    navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
    })
  }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onPress={handlePress}
        color={itemData.item.color}
        navigation={navigation}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns="2"
    />
  );
}

export default CategoriesScreen;
