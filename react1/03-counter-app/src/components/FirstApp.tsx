//import PropTypes from "prop-types";


type FirstAppProps = {
  name: string,
  subtitulo?: string,
}

const newMessage = {
  title: "Message",
  message: "New message",
};

const getMessage = ()=> newMessage.message;


export function FirstApp({name= "María", subtitulo}: FirstAppProps) {
  //const name = "Lara";
  return (
    <>
      <h1 data-testid="test-title">{name}'s first App</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Message: {getMessage()}</p>
      <p>{subtitulo}</p>
      <p>{subtitulo}</p>
    </>
  );
}


// Alternativa para utilizar types sin TS -> Deben ir al final
/*FirstApp.propTypes ={
  name: PropTypes.string.isRequired
}*/
/*FirstApp.defaultProps ={
  name: "María"
}*/