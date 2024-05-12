import * as Notification from "expo-notifications";

export const schedulePushNotification = async (date, medicament) => {
  try {
    await Notification.scheduleNotificationAsync({
      content: {
        title: "Recordatorio",
        body: `Tomar Medicamento Recetado: ${medicament}`,
      },
      trigger: date,
    });
  } catch (error) {
    console.log(error);
    alert("Error al crear una notificacion");
  }
};
