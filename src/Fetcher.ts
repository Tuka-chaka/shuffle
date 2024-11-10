const getSong = async  () => {
    const songId = Math.floor(Math.random() * 2300000)
    try {
        const response = await fetch(`https://api.genius.com/songs/${songId}?access_token=${process.env.CLIENT_ACCESS_TOKEN}`, { next: { revalidate: 86400 } });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json)
        return(json);
      } catch (error) {
        console.log(error)
        return(getSong());
      }
    
}

const getSongs = async() => {
    const songs = []
    for (let i = 0; i < 6;  i++) {
        songs.push(getSong())
    }
    const result = await Promise.all(songs)
    console.log(result)
    return result.map(res => res.response.song.full_title.replaceAll('\xa0', ' '))
}

export default getSongs

