import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  margin: 5px 5px 10px 10px;
  position: relative;
  height: 10vh;
  width: 5vw;
  cursor: pointer;
  z-index: 10;
  object-fit: cover;
`;

const UnclickedThumbnail = styled(Thumbnail)`
  box-shadow: 2px 2px 5px black;
`;

const ClickedThumbnail = styled(Thumbnail)`
  box-shadow: 2px 2px 5px #8D0801;
`;

export default function Style({
  style, currentStyle, setCurrentStyle, setImageIndex,
}) {
  return (
    style.style_id === currentStyle.style_id
      ? (
        <span key={style.style_id} id={style.style_id} style={{ position: 'relative', display: 'inline-flex' }}>
          <ClickedThumbnail src={style.photos[0].thumbnail_url} alt="" />
        </span>
      ) : (
        <span
          key={style.style_id}
          id={style.style_id}
          style={{ position: 'relative', display: 'inline-flex' }}
        >
          <UnclickedThumbnail
            src={style.photos[0].thumbnail_url}
            alt=""
            onClick={() => { setCurrentStyle(style); setImageIndex(0); }}
            onKeyPress={() => { setCurrentStyle(style); setImageIndex(0); }}
          />
        </span>
      )
  );
}
