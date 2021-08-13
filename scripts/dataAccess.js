

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authorsArray) => {
                applicationState.authors = authorsArray
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topicsArray) => {
                applicationState.topics = topicsArray
            }
        )
}
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (lettersArray) => {
                applicationState.letters = lettersArray
            }
        )
}

export const applicationState = {
    authors: [],
    topics: [],
    letters: []
}
console.log(applicationState)

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}
export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}