/* eslint-disable react/no-unknown-property */
import React, { useState, useRef, useEffect, Children } from "react";
import styles from "./../../../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Image from "next/image";
import m4 from "./../../kuku/novel.jpeg";
import { FcSpeaker } from "react-icons/fc";
import { RiVolumeMuteFill } from "react-icons/ri";
import { GoUnmute } from "react-icons/go";
import { GrForwardTen } from "react-icons/gr";
import { GrBackTen } from "react-icons/gr";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

const AudioPlayer = ({ children }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [mute, setMute] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);

  // references
  const audioPlayer: any = useRef(); // reference our audio component
  const progressBar: any = useRef(); // reference our progress bar
  const animationRef: any = useRef(); // reference the animation
  const speakerRef: any = useRef(); // reference the speark

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration) * 1 + 1;
    setDuration(seconds);
    progressBar.current.max = seconds;
    speakerRef.current.value = currentVolume;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    console.log("game");
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
    animationRef.current = requestAnimationFrame(changeSpeakerCurrentTime);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  const changeSpeakerRange = () => {
    const speaker = speakerRef.current.value / 100;
    audioPlayer.current.volume = speaker;
    setCurrentVolume(speaker);
    changeSpeakerCurrentTime();
  };
  const changeSpeakerCurrentTime = () => {
    speakerRef.current.style.setProperty(
      "--seek-before-width",
      `${(speakerRef.current.value / 100) * 100}%`
    );

    // setCurrentTime(progressBar.current.value);
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(Number(progressBar.current.value) - 10);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(Number(progressBar.current.value) + 10);
    changeRange();
  };

  const onMute = () => {
    const updateMute = !mute;
    console.log(updateMute);
    setMute(!mute);
    if (updateMute) {
      // changePlayerCurrentTime();
      audioPlayer.current.volume = 0;
    } else {
      audioPlayer.current.volume = currentVolume;
    }
  };

  // useEffect(() => {
  //   if (mute) {
  //     speakerRef.current.value = 1;
  //   } else {
  //     speakerRef.current.value = 0;
  //   }
  // }, [mute]);

  return (
    <>
      {children}

      <div className={styles.audioPlayer}>
        <div className="flex flex-col w-full">
          <input
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />

          <div className="flex justify-between items-center w-full p-2 ">
            <Image
              src={m4}
              className="rounded bg-slate-400 h-16 w-16"
              height={80}
              width={80}
            ></Image>
            <div className="flex space-x-9 ml-16 w-80 justify-between">
              <audio
                ref={audioPlayer}
                src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
                preload="metadata"
                // controls
              ></audio>

              <div className="flex space-x-5 items-center">
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={backThirty}
                >
                  <AiFillStepBackward className=" font-extrabold text-black text-2xl cursor-pointer hover:text-primaryColor" />
                </button>

                <GrBackTen className=" font-extrabold text-black text-2xl cursor-pointer hover:text-primaryColor" />
              </div>
              {/* <svg
                  height="24px"
                  color="rgb(255, 255, 255)"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 20.75A9.75 9.75 0 1 0 3.75 11v1.5m0 0l-3-3m3 3l3-3M9 7.25h.75a.75.75 0 0 1 .75.75v5.25m-1.5 0h3m6-1.5a1.5 1.5 0 1 1-3 0v-3a1.5 1.5 0 1 1 3 0v3z"
                    stroke="#262626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg> */}

              <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
              </button>

              <div className="flex space-x-5 items-center">
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={forwardThirty}
                >
                  <GrForwardTen className=" font-extrabold text-black text-2xl cursor-pointer hover:text-primaryColor" />
                </button>

                <AiFillStepForward className=" font-extrabold text-black text-2xl cursor-pointer hover:text-primaryColor" />
              </div>

              {/* <svg
                  height="24px"
                  color="rgb(255, 255, 255)"
                  width="24"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 20.75A9.75 9.75 0 1 1 20.25 11v1.5m3-2.25l-3 3-3-3M5.25 8H6a.75.75 0 0 1 .75.75V14m-1.5 0h3m6-1.5a1.5 1.5 0 1 1-3 0v-3a1.5 1.5 0 1 1 3 0v3z"
                    stroke="#262626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg> */}
            </div>

            <div className="flex space-x-1">
              {/* current time */}
              <div className={styles.currentTime}>
                {calculateTime(currentTime)}
              </div>
              {/* progress bar */}/{/* duration */}
              <div className={styles.duration}>
                {duration && !isNaN(duration) && calculateTime(duration)}
              </div>
              <div className="flex items-center space-x-2 w-40 cursor-pointer">
                <div onClick={onMute}>
                  {" "}
                  {mute ? <RiVolumeMuteFill /> : <GoUnmute />}
                </div>

                <input
                  type="range"
                  className={styles.progressBar}
                  defaultValue="0"
                  ref={speakerRef}
                  onChange={changeSpeakerRange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AudioPlayer };
