import Logo from "../Logo/Logo"

const Video = () => {
  return (
    <div className='relative h-full'>
      <section className="absolute w-40 mt-10 z-10 right-[10%] grid grid-cols-1 gap-16 sm:w-96">
        <Logo />
        <p>Enfocados en la formación de jóvenes <strong>líderes</strong> a través de actividades al <strong>aire libre</strong>, servicio comunitario y <strong>valores</strong> scouts.</p>

        <p>Más información</p>
      </section>
      <video
        className='h-full w-full object-fill object-top animate-fade animate-duration-[400] animate-ease-in-out'
        autoPlay
        muted
        loop
        style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0% 90%, 0 0)" }}
      >
        <source src='candle.webm' type='video/webm' />
      </video>
      <video
        className=' absolute blur-3xl -bottom-36 -z-40 '
        autoPlay
        muted
        loop
      >
        <source src='candle.webm' type='video/webm' />
      </video>
    </div >
  )
}

export default Video
