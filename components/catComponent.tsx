import React, { useState } from "react";
import { Text, Image, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/reducer";
import { RootState } from "../store/store";

interface CatInterface {
  name: string;
}

const Cat = ({ name }: CatInterface): JSX.Element => {
  const [showMeow, setShowMeow] = useState(false);
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);
  const handlePet = () => {
    setShowMeow(true);
    dispatch(increment());
  };
  return (
    <View>
      {showMeow && <Text>Meow x {count}</Text>}
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I am {name} and I am your cat!</Text>
      <Button onPress={handlePet} title="Pet Me" />
    </View>
  );
};

export default Cat;
