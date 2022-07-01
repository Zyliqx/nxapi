import React from 'react';
import { Platform, Text } from 'react-native';
import { svg_styles } from './util.js';

const IconWeb = React.memo(() => <Text>
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style={svg_styles}><title>ionicons-v5-r</title><path d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"/></svg>
</Text>);

export default Platform.OS === 'web' ? IconWeb : React.memo(() => null);