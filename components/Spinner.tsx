import { ThreeDots } from 'react-loader-spinner'

export default function Spinner({
  color = 'white',
  height = '1.5rem',
  width = '1.5rem',
}) {
  return (
    <ThreeDots
      // type={type as any}
      color={color}
      height={height}
      width={width}
    />
  )
}
