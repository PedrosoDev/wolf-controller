import { IconProps } from './type'

export function NextMediaIcon({ color = 'currentColor', className }: IconProps) {
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
        d="M3 4.503a1.5 1.5 0 012.367-1.224l10.5 7.444a1.5 1.5 0 01.01 2.442l-10.5 7.556A1.5 1.5 0 013 19.505V4.502zm18-.753a.75.75 0 10-1.5 0v16.5a.75.75 0 101.5 0V3.75z"
      ></path>
    </svg>
  )
}
