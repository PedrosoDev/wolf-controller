export interface IMediasInfoSubscription {
  subscribe(callback: MediasInfoSubscriptionCallback): void;
}

export type MediasInfoSubscriptionCallback = (medias: MediaInfo[]) => void;

export type MediaInfo = {
  title: string;
  artist: string;
  image: string;
  isPlaying: boolean;
  isMute: boolean;
  volumeLevel: number;
  time: {
    current: number;
    total: number;
  };
};
