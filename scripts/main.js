import { fetchAuthors, fetchLetters, fetchLetterTopics, fetchTopics } from "./dataAccess.js";
import { penPalSociety } from "./PenPalSociety.js";

export const mainContainer = document.querySelector('#mainContainer')

const renderAll = () => {
    const promise = [fetchAuthors(), fetchTopics(), fetchLetterTopics(), fetchLetters()]
    Promise.all(promise)
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