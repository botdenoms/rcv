export const BASE_URL = "http://localhost:8080/api/v1/"

export const elections = async() => {
    try {
        const resp = await fetch(`${BASE_URL}elections`)
        const data = await resp.json()
        return data
    } catch (error) {
        return error
    }
}

export const election = async(id) => {
    try {
        const resp = await fetch(`${BASE_URL}elections/${id}`)
        const data = await resp.json()
        return data
    } catch (error) {
        return error
    }
}

export default BASE_URL
