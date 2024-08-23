import { IconProps } from './type'

export function CirclePauseIcon({ color = 'currentColor', className }: IconProps) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 6.25v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 011.5 0zm4.5 0v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 111.5 0z"
      ></path>
    </svg>
  )
}
