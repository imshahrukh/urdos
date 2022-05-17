import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import funny from "./../../kuku/icons/funny.png";
import Image from "next/image";

export const Player = ({ children }) => {
  return (
    <div>
      {children}
      <div className="fixed h-28 w-full bg-gray-500 bottom-0 left-0 text-black flex justify-center items-center">
        <AudioPlayer
          autoPlay={true}
          layout="stacked-reverse"
          //   header={
          //     <div>
          //       <Image
          //         src={funny}
          //         className="rounded-t-xl max-w-44 rounded"
          //         alt="top 10"
          //       ></Image>
          //     </div>
          //   }
          showFilledVolume={true}
          loop={true}
          src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
};
