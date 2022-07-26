const sendNotification = (name, apellido, phone, mensaje, fecha, tiempo) =>  {
  const message = `Hola! \nQuisiera reservar una mesa con ustedes:
                        Mi nombre es: ${name}
                        Apellido: ${apellido}
                        Fecha: ${fecha}
                        Tiempo: ${tiempo}
                        Teléfono: ${phone}
                        Mensaje: ${mensaje}`.replace(/  +/g, '');

  window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`)
}

$( "#button-send-contact" ).click(function() {
  const name= $("#name").val();
  const apellido= $("#apellido").val();
  const fecha= $("#fecha").val();
  const tiempo= $("#tiempo").val();
  const phone= $("#phone").val();
  const mensaje= $("#mensaje").val();
  if(name.length > 0, apellido.length >0, fecha.length > 0, tiempo.length > 0, phone.length >0, mensaje.length >0){
    sendNotification(name, apellido, phone, mensaje, fecha, tiempo);
  }
  console.log(this)
});
