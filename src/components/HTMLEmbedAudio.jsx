import "./HTMLEmbedAudio.css";

const HTMLEmbedAudio = (props) => {
  const heading = "<audio> HTML element";

  return (
    <div>
      <h3>{heading}</h3>
      <div>
        <span>Kakapo</span>
        <audio controls>
          <source src="audio/kakapo.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default HTMLEmbedAudio;
