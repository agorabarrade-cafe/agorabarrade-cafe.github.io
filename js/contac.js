const sendNotification = (name, apellido, mensaje) =>  {
  const message = `¡Hola! Soy ${name} ${apellido}, quiero saber sobre: ${mensaje}`.replace(/  +/g, '');
  window.open(`https://api.whatsapp.com/send?phone=525591703575&text=${encodeURIComponent(message)}`)
}

$( "#button-send-contact" ).click(function() {
  const name= $("#name").val();
  const apellido= $("#apellido").val();
  const mensaje= $("#mensaje").val();
  if(name.length > 0, apellido.length > 0, mensaje.length > 0){
    sendNotification(name, apellido, mensaje);
  }
  console.log(this)
});
