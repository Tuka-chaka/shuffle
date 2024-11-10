const getSongs = async() => {
    const data = await fetch(`https://api.genius.com/songs/378195&access_token=${process.env.CLIENT_ACCESS_TOKEN}`)
    console.log(process.env.CLIENT_ACCESS_TOKEN)
    return await data.json()
}

export default getSongs

