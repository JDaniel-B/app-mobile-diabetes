import { useState, useEffect } from "react";
import { View } from "react-native";
import { header, detail } from "../services/appointment";
import HeaderCites from "../components/header-cites";
import CardCites from "../components/card-cites";
import { useAuthContext } from "../providers/auth";
import Loading from "../components/loading";
import { ScrollView } from "react-native-gesture-handler";
import Wait from "../components/wait";

function HomeScreen() {
  const { user } = useAuthContext();
  const [dataHeader, setDataHeader] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    (async () => {
      if (user[0].id_paciente) {
        const dataHeader = await header(user[0]?.id_paciente);
        const dataDetail = await detail(user[0]?.id_paciente);
        setDataHeader(dataHeader);
        setDataDetail(dataDetail);
      }
    })();
  }, [user]);

  return (
    <View
      style={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
      }}
    >
      {dataHeader.length > 0 ? (
        <ScrollView style={{ paddingHorizontal: 15 }}>
          {dataHeader.map((header, index) => (
            <HeaderCites key={index} date={header.fecha}>
              {dataDetail.map((detail, index) =>
                detail.fecha == header.fecha ? (
                  <CardCites key={index} data={detail} />
                ) : null
              )}
            </HeaderCites>
          ))}
        </ScrollView>
      ) : (
        <Loading component={<Wait />} />
      )}
    </View>
  );
}

export default HomeScreen;
