import 'styled-components';
import { colors } from '../global/styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}