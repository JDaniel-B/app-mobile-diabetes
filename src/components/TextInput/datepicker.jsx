import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
RNDateTimePicker;

export default function DatePicker() {
  const [datePicker, setDatePicker] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const change = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDatePicker(currentDate);
      setShowPicker(!showPicker);
    } else {
      setShowPicker(!showPicker);
    }
  };

  return (
    <View style={{ width: "100%" }}>
      {showPicker && (
        <RNDateTimePicker onChange={change} mode="date" value={datePicker} />
      )}
      <Pressable onPressIn={() => setShowPicker(!showPicker)}>
        <Text>Seleccionar Fecha</Text>
        <TextInput editable={false} style={styles.input}>
          {moment(datePicker).format("LL")}
        </TextInput>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderBottomWidth: 1, width: "100%" },
});
