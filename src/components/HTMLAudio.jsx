import { VolumeUp, Notifications } from "@material-ui/icons";
import "./HTMLAudio.css";

const HTMLAudio = (props) => {
  const audio = new Audio();

  // To include multiple source options, test what the browser can play:
  if (audio.canPlayType("audio/ogg")) {
    // audio.src = "some_ogg_file";
  } else {
    // audio.src = "some_mp3_file";
  }

  audio.src = "audio/kokako.mp3";

  const handleClick = () => {
    audio.play();
  };

  return (
    <div>
      <h3>Audio() HTMLAudioElement</h3>
      <label>Kokako</label>
      <button className="play" onClick={handleClick}>
        <VolumeUp />
      </button>
    </div>
  );
};

export default HTMLAudio;
