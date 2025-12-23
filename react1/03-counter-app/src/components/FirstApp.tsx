const newMessage = {
  title: "Message",
  message: "New message",
};

const getMessage = ()=> newMessage.message;

export function FirstApp() {
  const name = "Lara";
  return (
    <>
      <h1>{name}'s first App</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>Message: {getMessage()}</p>
    </>
  );
}
