import { MediaFragment } from 'lib/contentful/generated'
import NextImage from 'next/image'
import { useMemo } from 'react'

const NextImageMedia = (props: MediaFragment) => {
  const imageProps: React.ComponentPropsWithoutRef<typeof NextImage> = useMemo(() => {
    if (!props.width || !props.height) {
      return { src: props.url || '', layout: 'fill' }
    }
    return {
      src: props.url || '',
      width: props.width,
      height: props.height
    }
  }, [props])

  return <NextImage alt={props.title ?? undefined} {...imageProps} />
}

export default NextImageMedia
