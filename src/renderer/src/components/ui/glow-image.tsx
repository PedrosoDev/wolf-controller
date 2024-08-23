import { cn } from '@renderer/utils/cn'

type GlowImageProps = {
  src: string
  alt?: string
  className?: string
}

export function GlowImage({ src, className }: GlowImageProps) {
  return (
    <div className={cn('relative', className)}>
      <img src={src} className="relative rounded-[inherit] z-10" />
      <img src={src} className="absolute inset-0 rounded-[inherit] blur-lg saturate-[3]" />
    </div>
  )
}
