import { getLetters } from "./dataAccess.js"
import { LetterForm } from "./LetterForm.js"
// import { Letters } from "./Letters.js"


export const penPalSociety = () => {
    const letters = getLetters()
    console.log(letters)
    return `
    <h2>Pen Pal Society</h2>

    <article>
        ${LetterForm()}
    </article>
    <p>
    <article>
    </article>
    `
}
// ${Letters()}