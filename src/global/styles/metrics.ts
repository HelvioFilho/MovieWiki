import { Dimensions, PixelRatio } from "react-native"

const { width, height } = Dimensions.get('window');
const figmaWidth = 375;

const px = (valuePx: number) => {
  const withPercent = (valuePx / figmaWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * withPercent) / 100
  )
  return screenPixel;
}

export const metrics = {
  px,
  width,
  height
}