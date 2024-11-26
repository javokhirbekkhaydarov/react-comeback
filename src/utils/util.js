export const playSong = (isPlaying ,  audioTag)  => {
    if (isPlaying) {
        const playPromise =  audioTag.current.play();
        if(playPromise !== undefined) {
            playPromise.then(() => {
                audioTag.current.play()
            })
        }
    }
}
