import { fetchAuthors, fetchLetters, fetchLetterTopics, fetchTopics } from "./dataAccess.js";
import { penPalSociety } from "./PenPalSociety.js";

export const mainContainer = document.querySelector('#mainContainer')

const renderAll = () => {
    fetchAuthors()
        .then(fetchTopics)
        .then(fetchLetterTopics)
        .then(fetchLetters)
        .then(
            () => {
                mainContainer.innerHTML = penPalSociety()
            }
        )
}

renderAll()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderAll()
    }
)