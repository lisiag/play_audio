import "./HTMLEmbedAudio.css";

const HTMLEmbedAudio = (props) => {
  const heading = "<audio> HTML element";

  return (
    <div>
      <h3>{heading}</h3>
      <div>
        <span>Kakapo</span>
        <audio controls>
          {/* To include multiple sources: ogg, mp3 etc., include multiple <source> tags: */}
          {/* <source src="some_ogg_file" type="audio/ogg" /> */}
          <source src="audio/kakapo.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default HTMLEmbedAudio;
