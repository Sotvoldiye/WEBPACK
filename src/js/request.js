import loaderToggle from './loader'
import loader from './loader'

const request = async (reource) => {
      loaderToggle(true)
      const req = await fetch(reource)
    if (!req.ok) {
        loaderToggle(false)
        throw new Error("Something went wrong :(")
    }
    const data = await req.json()
    loaderToggle(false)
    return data
}

export default request