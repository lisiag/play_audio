const HTMLAudio = (props) => {
  const heading = "HTML Audio element <audio>";
  return (
    <div>
      <h3>{heading}</h3>
      <audio controls>
        <source src="audio/birds_chirp.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default HTMLAudio;
