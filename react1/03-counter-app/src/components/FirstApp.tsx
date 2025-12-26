//import PropTypes from "prop-types";


type FirstAppProps = {
  name: string
}

const newMessage = {
  title: "Message",
  message: "New message",
};

const getMessage = ()=> newMessage.message;


export function FirstApp({name= "María"}: FirstAppProps) {
  //const name = "Lara";
  return (
    <>
      <h1>{name}'s first App</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Message: {getMessage()}</p>
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