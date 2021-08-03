function ErrorScreen({ error }) {
  //
  // Here you can handle or track the error before rendering the message
  //

  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>Bookminster can't load book right now.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}