export const calcTime = (time: number) => {
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes}: ${seconds}`

}


 