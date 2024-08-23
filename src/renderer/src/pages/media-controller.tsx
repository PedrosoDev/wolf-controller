import { Slot } from '@radix-ui/react-slot'
import { CirclePauseIcon } from '@renderer/components/icons/circle-pause'
import { CirclePlayIcon } from '@renderer/components/icons/circle-play'
import { NextMediaIcon } from '@renderer/components/icons/next-media'
import { PreviousMediaIcon } from '@renderer/components/icons/previous-media'
import { SpeakerOnIcon } from '@renderer/components/icons/speaker-on'
import { SpeakerOffIcon } from '@renderer/components/icons/speaker-off'
import { Button } from '@renderer/components/ui/button'
import { GlowImage } from '@renderer/components/ui/glow-image'
import { Slider } from '@renderer/components/ui/slider'
import { useAutoToggleOff } from '@renderer/hooks/use-auto-toggle-off'
import { AnimatePresence, motion } from 'framer-motion'

type MediaInfo = {
  title: string
  artist: string
  image: string
  isPlaying: boolean
  isMute: boolean
  volumeLevel: number
  time: {
    current: number
    total: number
  }
}

const mediaMock: MediaInfo = {
  title: 'Billie Bossa Nova',
  artist: 'Billie Eilish',
  image:
    'https://lh3.googleusercontent.com/pWO2rD8Q-ewDGhzt6_WU4ML9IVEdSxys8ENJMKr1msKrGC1PDIFycSNbwhoT9zoDdTp4X7ioo2T42S0=w544-h544-l90-rj',
  isPlaying: true,
  isMute: false,
  volumeLevel: 50,
  time: {
    current: 98.5,
    total: 197
  }
}

export function MediaControllerPage() {
  const [showVolme, toggleShowVolume] = useAutoToggleOff()

  const media = mediaMock

  function handlePlayPause() {}

  function handlePrevious() {}

  function handleNext() {}

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col justify-between flex-1 px-6 pt-9 pb-4 overflow-hidden">
      {/* Media Info */}
      <section className="flex items-center gap-6">
        <GlowImage
          src={media.image}
          alt={media.title}
          className="w-36 h-36 rounded-lg flex-shrink-0"
        />

        <div className="overflow-hidden">
          <h2 className="block text-2xl font-semibold truncate">{media.title}</h2>
          <span className="block text-base font-normal truncate">{media.artist}</span>
        </div>
      </section>

      {/* Media Controller */}
      <section className="flex flex-col px-4">
        {/* Time Slider */}
        <div className="flex gap-2 text-sm font-normal">
          <span>{formatTime(media.time.current)}</span>

          <Slider
            disabled
            hideThumb
            value={[media.time.current]}
            max={media.time.total}
            step={1}
            trackClassName="h-1"
          />

          <span>{formatTime(media.time.total)}</span>
        </div>

        {/* Media controller */}
        <div className="flex gap-6 justify-center">
          {/* Previous */}
          <Button variant="ghost" onClick={handlePrevious} className="p-2">
            <PreviousMediaIcon className="size-6" />
          </Button>

          {/* Play/Pause */}
          <Button variant="ghost" onClick={handlePlayPause} className="p-2">
            <Slot className="size-12">
              {media.isPlaying ? <CirclePauseIcon /> : <CirclePlayIcon />}
            </Slot>
          </Button>

          {/* Next */}
          <Button variant="ghost" onClick={handleNext} className="p-2">
            <NextMediaIcon className="size-6" />
          </Button>
        </div>
      </section>

      {/* Volume */}
      <AnimatePresence>
        {showVolme && (
          <motion.div
            initial={{ right: -100 }}
            animate={{ right: 12 }}
            exit={{ right: -100 }}
            className="flex flex-col items-center gap-2 h-36 top-1/2 -translate-y-1/2 absolute z-50 bg-transparent p-2 backdrop-blur-sm rounded shadow-lg"
          >
            <Slider
              disabled
              hideThumb
              orientation="vertical"
              value={[media.volumeLevel]}
              max={100}
              step={1}
              trackClassName="w-1 h-full"
              className="h-full w-fit"
            />

            {media.isMute || media.volumeLevel === 0 ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
