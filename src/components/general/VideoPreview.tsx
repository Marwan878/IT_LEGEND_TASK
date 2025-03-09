import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "@/components/general";

function VideoPreview({
  src,
  setVideoIsExpanded,
}: {
  src: string;
  setVideoIsExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const isMobile = useIsMobile();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsExpanded(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div
      className={cn(
        "transition-all bg-black duration-300 ease-in-out group sm:top-0 z-[1000] rounded-sm mx-auto max-w-full",
        {
          "h-[32.9375rem] relative": !isMobile,
          "inset-0 fixed bg-black flex items-center justify-center rounded-none":
            isExpanded && isMobile,
          "sticky top-4 h-[19.125rem]": !isExpanded && isMobile,
          "w-full object-cover": isExpanded && !isMobile,
        }
      )}
    >
      <div
        className={cn("aspect-video h-full w-full", {
          "aspect-[9/16] h-[100vw] w-[100vh] absolute":
            isExpanded && isMobile,
        })}
        style={{ rotate: isExpanded && isMobile ? "90deg" : "0deg" }}
      >
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover bg-black rounded-sm"
          playsInline
        />

        <TogglePlayButton onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </TogglePlayButton>

        <Controls
          isExpanded={isExpanded}
          isMuted={isMuted}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          toggleMute={toggleMute}
          handleExpand={() => {
            setIsExpanded((curr) => !curr);
            setVideoIsExpanded?.((curr) => !curr);
          }}
        />
      </div>
    </div>
  );
}

export default VideoPreview;

function Controls({
  isExpanded,
  isMuted,
  isPlaying,
  togglePlay,
  toggleMute,
  handleExpand,
}: {
  isPlaying: boolean;
  isMuted: boolean;
  isExpanded: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  handleExpand: () => void;
}) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={togglePlay}
          className="text-white hover:text-primary transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button
          onClick={toggleMute}
          className="text-white hover:text-primary transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        <button
          onClick={handleExpand}
          className="text-white hover:text-primary transition-colors ml-auto"
          aria-label={isExpanded ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isExpanded ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
        </button>
      </div>
    </div>
  );
}

function TogglePlayButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-14 w-14 flex items-center justify-center"
    >
      {children}
    </button>
  );
}
