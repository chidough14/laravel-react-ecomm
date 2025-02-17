import { Image } from '@/types'
import { useEffect, useState } from 'react'

const Carousel = ({ images }: { images: Image[] }) => {

  const [selectedImage, setSelectedImage] = useState<Image>(images[0])

  useEffect(() => {
    setSelectedImage(images[0])
  }, [images])

  return (
    <>
      <div className='flex gap-8 items-start'>
        <div className='flex flex-col items-center gap-2 py-2'>
          {
            images.map((image, i) => (
              <button
                className={'border-2 ' + (selectedImage.id === image.id ? 'border-blue-500' : 'hover:border-blue-500')}
                key={image.id}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.thumb} className='w-[50px]' alt='Thumb' />
              </button>
            ))
          }
        </div>

        <div className='carousel w-full'>
          <div className='carousel-item w-full'>
            <img src={selectedImage.large} alt="large" className='w-full h-[600px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel