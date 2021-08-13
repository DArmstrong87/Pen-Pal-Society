import { fetchAuthors, fetchLetters, fetchTopics } from "./dataAccess.js";
import { penPalSociety } from "./PenPalSociety.js";

const mainContainer = document.querySelector('#mainContainer')

const renderAll = () => {
    fetchAuthors()
    fetchLetters()
    fetchTopics()
        .then(
            () => {
                mainContainer.innerHTML = penPalSociety()
            }
        )

}

renderAll()