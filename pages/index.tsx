// @ts-nocheck
import dynamic from 'next/dynamic'

const Shader = dynamic(() => import('../components/Shader'), {
  ssr: false,
})

export default function Homepage() {
  return (
    <div className="relative flex h-full flex-col  overflow-hidden ">
      <div className="flex justify-between">
        <div className="p-10 text-4xl">EW</div>
        <div className="p-10 text-4xl">ME</div>
      </div>
      <div className="flex-1 px-10 text-8xl">Origin Wave</div>
      <div className="flex justify-between">
        <div className="p-10 text-4xl">Play</div>
        <div className="p-10 text-4xl">Volume</div>
      </div>
      <Shader />
    </div>
  )
}
