import { IconProps } from './type'

export function SpeakerOffIcon({ color = 'currentColor', className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill={color}
        d="M15 4.25c0-1.078-1.274-1.65-2.08-.934L8.427 7.31a.75.75 0 01-.498.19H4.25A2.25 2.25 0 002 9.75v4.497a2.25 2.25 0 002.25 2.25h3.68a.75.75 0 01.498.19l4.491 3.993c.806.717 2.081.145 2.081-.934V4.25zm1.22 4.97a.75.75 0 011.06 0L19 10.94l1.72-1.72a.75.75 0 111.06 1.06L20.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L19 13.062l-1.72 1.72a.75.75 0 11-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 010-1.06z"
      ></path>
    </svg>
  )
}
