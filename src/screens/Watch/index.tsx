import React, { useCallback, useState } from 'react';
import { Container, GoBack } from '../../components';
import YoutubePlayer from 'react-native-youtube-iframe';
import { defaultTheme } from '../../global/styles/theme';
import { useDataStore } from '../../service/stores';

export function Watch() {
  const [playing, setPlaying] = useState(false);
  const { data } = useDataStore();
  const youtubeId = YoutubeGetId(data.trailer_url);

  function YoutubeGetId(url: string) {
    let id, newUrl, newId;
    newUrl = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      newId = newUrl[2].split(/[^0-9a-z_\-]/i);
      id = newId[0];
    }
    else {
      id = url;
    }
    return id;
  }


  const onStateChange = useCallback(
    (state) => {
      if (state === 'ended') {
        setPlaying(false);
      }
    }, []);

  const togglePlaying = useCallback(
    () => {
      setPlaying((prev) => !prev);
    }, []);

  return (
    <Container align="flex-start" justify="center">
      <GoBack />
      <YoutubePlayer
        height={defaultTheme.metrics.px(300)}
        width={defaultTheme.metrics.width}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
    </Container>
  );
}