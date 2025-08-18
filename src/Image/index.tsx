import * as React from 'react'
import { ColorProps, SpaceProps } from 'styled-system'
import { Image, View } from 'react-native'
import images from '../Image/assets/images.js'
import { ImageContainer } from './styles'

export type ImageProps = SpaceProps &
  ColorProps & {
    size: number
    testID?: string
    customImage?: string
  }

const CustomImage: React.FC<ImageProps> = (props) => {
  if (props.customImage) {
    return (
      <ImageContainer>
        <Image
          source={{ uri: props.customImage }}
          resizeMode="contain"
          style={[{ height: 30, width: 30, borderRadius: 15 }]}
        />
      </ImageContainer>
    )
  }
  return (
    <View>
      <Image source={images.confetti} resizeMode="contain" style={[{ height: props.size, width: props.size }]} />
    </View>
  )
}

export default CustomImage

CustomImage.defaultProps = {
  size: 20
}
