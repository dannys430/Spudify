export const RECEIVE_PREV_SONG = 'RECEIVE_PREV_SONG';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE'
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RECEIVE_DURATION = 'RECEIVE_DURATION'
export const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME'


export const receivePrevSong = (song) => {
  return {
    type: RECEIVE_PREV_SONG,
    song
  }
}

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  }
}

export const receiveNextSong = (song) => {
  return {
    type: RECEIVE_NEXT_SONG,
    song
  }
}

export const receiveQueue = (songs) => {
  return {
    type: RECEIVE_QUEUE,
    songs
  }
}

export const play = () => {
  return {
    type: PLAY
  }
}

export const pause = () => {
  return {
    type: PAUSE
  }
}

export const receiveDuration = () => {
  return {
    type: RECEIVE_DURATION
  }
}

export const receiveCurrentTime = () => {
  return {
    type: RECEIVE_CURRENT_TIME
  }
}
