const sendNotification = (name, apellido, phone, mensaje) =>  {
  const message = `Hola! \nQuisiera comunicarme con ustedes:
                        Mi nombre es: ${name}
                        Apellidos: ${apellido}
                        Teléfono: ${phone}
                        Mensaje: ${mensaje}`.replace(/  +/g, '');

  window.open(`https://api.whatsapp.com/send?phone=525591703575&text=${encodeURIComponent(message)}`)
}

$( "#button-send-contact" ).click(function() {
  const name= $("#name").val();
  const apellido= $("#apellido").val();
  const phone= $("#phone").val();
  const mensaje= $("#mensaje").val();
  if(name.length > 0, apellido.length > 0, phone.length > 0, mensaje.length > 0){
    sendNotification(name, apellido, phone, mensaje);
  }
  console.log(this)
});
