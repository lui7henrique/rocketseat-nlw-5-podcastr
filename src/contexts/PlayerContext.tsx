import { createContext, ReactNode, useState } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: string;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void
  playList: (list: Episode[], index: number) => void
  setPlayingState: (boolean) => void
  togglePlay: () => void
  playNext: () => void
  playPrevious: () => void
}

type PlayerContextProviderProps = {
  children: ReactNode
}


export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({children} : PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number){
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);

  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function playNext(){
    const nextEpisodeIndex = currentEpisodeIndex + 1;
    if(nextEpisodeIndex < episodeList.length){
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }    
  }

  function playPrevious(){
    setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    if(currentEpisodeIndex > 0){
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }  
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      play,
      playNext,
      playPrevious,
      playList,
      isPlaying,
      togglePlay,
      setPlayingState
    }}> {children} </PlayerContext.Provider>
  )
}