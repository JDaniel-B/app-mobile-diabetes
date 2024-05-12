import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useAuthContext } from "../providers/auth";
import { getMedicaments } from "../services/medicament";
import CardMedicament from "../components/card-medicament";
import Loading from "../components/loading";

export default function MedicamentScreen() {
  const { user } = useAuthContext();
  const [medicaments, setMedicaments] = useState([]);
  useEffect(() => {
    (async () => {
      const medicament = await getMedicaments(user[0]?.id_paciente);
      setMedicaments(medicament);
    })();
  }, []);

  return (
    <View style={syltes.container}>
      {medicaments.length > 0 ? (
        medicaments.map((item, index) => (
          <CardMedicament data={item} key={index} />
        ))
      ) : (
        <Loading />
      )}
    </View>
  );
}

const syltes = StyleSheet.create({
  container: { height: "auto", display: "flex", padding: 20 },
});
