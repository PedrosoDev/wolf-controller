import { MediaInfo } from "@renderer/services/medias-info-subscription/interface";
import { useState } from "react";

const mediaInfoFallback: MediaInfo = {
  title: "Não encontrado",
  artist: "Não encontrado",
  image:
    "https://media.istockphoto.com/id/1415203156/pt/vetorial/error-page-page-not-found-vector-icon-in-line-style-design-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=NT-YHcwt1sbxa5yQW1lLHXO_4AaGIFb5L_I5TXvo1pU=",
  time: {
    current: 0,
    total: 0,
  },
  volumeLevel: 0,
  isMute: false,
  isPlaying: false,
};

export function useMedia() {
  const [media] = useState<MediaInfo>(mediaInfoFallback);
  return { media };
}
