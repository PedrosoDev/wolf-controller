import { IconProps } from './type'

export function PreviousMediaIcon({ color = 'currentColor', className }: IconProps) {
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
        d="M21 4.503a1.5 1.5 0 00-2.367-1.224l-10.5 7.444a1.5 1.5 0 00-.01 2.442l10.5 7.556A1.5 1.5 0 0021 19.505V4.502zM3 3.75a.75.75 0 011.5 0v16.5a.75.75 0 11-1.5 0V3.75z"
      ></path>
    </svg>
  )
}
