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


export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}
export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const sendLetterTopic = (userTopic) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTopic)
    }


    return fetch(`${API}/letterTopics`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}