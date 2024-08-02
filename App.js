import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { increment, decrement, incrementByAmount } from "./slices/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
});
