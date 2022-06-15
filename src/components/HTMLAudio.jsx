import { VolumeUp, Notifications } from "@material-ui/icons";
import "./HTMLAudio.css";

const HTMLAudio = (props) => {
  const audio = new Audio("audio/kokako.mp3");

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
