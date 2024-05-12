import { View, StyleSheet } from "react-native";
import React from "react";
import TextMedicament from "./body-medicament";
import moment from "moment";
import { schedulePushNotification } from "../hooks/useNotification";
import Button from "../components/button";

export default function CardMedicament({ data }) {
  const generateNotification = async () => {
    const dates = [];
    const hours = data?.no_dias * 24;
    const dosis = hours / 12;
    const notifications = dosis - 1;

    // await schedulePushNotification(moment().add(3, "s"));

    function addHours(hour, date) {
      let fechaActual = moment(date);
      const addDate = fechaActual.add(hour, "s");
      console.log(addDate.format("YYYY-MM-DDTHH:mm:ssZ"));
      return addDate.valueOf();
    }

    const addDates = (lol) => {
      dates.push(lol);
    };

    for (i = 0; i < notifications; i++) {
      let result = addHours(10, result);
      addDates(result);
    }

    dates.map(async (item, index) => {
      await schedulePushNotification(item, data?.nombre_medicamento);
    });
  };
  return (
    <View style={styles.container}>
      <TextMedicament
        tittle={"Medicamento:"}
        content={data?.nombre_medicamento}
      />
      <TextMedicament tittle={"No. de Dias:"} content={data?.no_dias} />
      <TextMedicament
        tittle={"Tratamiento:"}
        content={`Cada ${data?.cada_hora} horas`}
      />
      <TextMedicament
        tittle={"Fecha Inicio:"}
        content={moment(data?.fecha).format("LL")}
      />
      <TextMedicament
        tittle={"Recomendaciones:"}
        content={data?.recomendaciones}
      />
      <View style={styles.containerButton}>
        <Button
          tittle={"Crear Recordatorio"}
          action={() => generateNotification()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFF",
    maxWidth: "100%",
    gap: 3,
    borderRadius: 10,
  },
  containerButton: {
    alignSelf: "center",
  },
});
