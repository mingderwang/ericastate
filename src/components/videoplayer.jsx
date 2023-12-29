import { Fragment } from 'react'

export default function VideoPlayer({
  src = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  isPlaying,
}) {
  // TODO: do something with isPlaying
  return (
    <Fragment>
      <video src={src} />
    </Fragment>
  );
}
