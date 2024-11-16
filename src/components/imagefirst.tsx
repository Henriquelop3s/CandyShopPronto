import Image from 'next/image'

export default function ImageFirst() {
  return (
    <div className='relative w-full h-64'> {/* Definindo uma altura */}
      <Image
        src="/img/relampago.jpg"
        alt="Hero Image"
        layout="fill" // Preenche o contêiner
        objectFit="cover" // Cobre o contêiner
      />
    </div>
  )
}
