import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-green-600 lg:text-9xl text-sm">
          Hello world!
        </h1>
        <div className='border-4 border-green-400'>
          Hi
        </div>
        <h1 className="text-vuejs capitalize">
          hello world!
        </h1>
        <p className='text-xs lg:text-3xl uppercase'>Long sentence</p>
        <p className='p-2 bg-red-500'>Padding</p>
      </div>
      <div className='flex space-x-2'>
        <div className='w-1/2 h-12 bg-red-300'></div>
        <div className='w-1/2 h-12 bg-green-300'></div>
      </div>
    </div>
  )
}
