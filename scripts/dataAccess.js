

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authors) => {
                applicationState.authors = authors
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                applicationState.topics = topics
            }
        )
}
export const fetchLetters = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (letters) => {
                applicationState.letters = letters
            }
        )
}

const applicationState = {
    authors: [],
    topics: [],
    letters: []
}