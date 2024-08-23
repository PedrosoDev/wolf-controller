import { IconProps } from './type'

export function CirclePlayIcon({ color = 'currentColor', className }: IconProps) {
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
        d="M12 1.714C6.32 1.714 1.714 6.32 1.714 12S6.32 22.286 12 22.286 22.286 17.68 22.286 12 17.68 1.714 12 1.714zm-1.058 6.239l5.576 3.31a.857.857 0 010 1.474l-5.576 3.31A1.285 1.285 0 019 14.942V9.058a1.286 1.286 0 011.942-1.105z"
      ></path>
    </svg>
  )
}
