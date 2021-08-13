import { deleteLetter, getAuthors, getLetters, getTopics } from "./dataAccess.js";

document.addEventListener("click", click => {
    if (click.target.id.startsWith("delete--")) {
        const [, letterId] = click.target.id.split("--")
        deleteLetter(parseInt(letterId))
    }
})

export const Letters = () => {
    const authors = getAuthors()
    const topics = getTopics()
    const letters = getLetters()
    console.log(letters)

    return ` 
    <ul>
    ${letters.map(
        letter => {
            return `<li>${letter.letterBody}
            <button name="deleteLetter" id="delete--${letter.id}">Delete</button>
            </li>`
        }
    ).join("")}
    </ul>
    `
}