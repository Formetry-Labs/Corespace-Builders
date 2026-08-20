import React from 'react'

type IconProps = {
  className?: string
}

export const TerrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden
    className={className}
    fill="none"
    height="22"
    viewBox="0 0 24 24"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 18L9.5 8.5L13 13.5L16 9.5L21 18H3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path
      d="M14.5 8.5C15.3284 8.5 16 7.82843 16 7C16 6.17157 15.3284 5.5 14.5 5.5C13.6716 5.5 13 6.17157 13 7C13 7.82843 13.6716 8.5 14.5 8.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
)

export const WeatherIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden
    className={className}
    fill="none"
    height="22"
    viewBox="0 0 24 24"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 16.5H16.5C18.7091 16.5 20.5 14.7091 20.5 12.5C20.5 10.2909 18.7091 8.5 16.5 8.5C16.184 8.5 15.878 8.5365 15.585 8.605C14.879 6.522 12.89 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 10.835 5.0305 11.162 5.0885 11.478C3.885 11.95 3 13.12 3 14.5C3 16.1569 4.34315 17.5 6 17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path d="M9 19V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M12.5 19V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M16 19V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </svg>
)

export const LogisticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden
    className={className}
    fill="none"
    height="22"
    viewBox="0 0 24 24"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path d="M12 12L20 7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M12 12V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M12 12L4 7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </svg>
)

export const DesignIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    aria-hidden
    className={className}
    fill="none"
    height="22"
    viewBox="0 0 24 24"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M9 14.5V11.5L12 9L15 11.5V14.5H9Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path d="M10.5 14.5V13H13.5V14.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const positioningIcons = {
  design: DesignIcon,
  logistics: LogisticsIcon,
  terrain: TerrainIcon,
  weather: WeatherIcon,
} as const

export type PositioningIconKey = keyof typeof positioningIcons
