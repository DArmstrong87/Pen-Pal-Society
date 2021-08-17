import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"


export const penPalSociety = () => {
    return `
    <h2>Pen Pal Society</h2>

    <article>
        ${LetterForm()}
    </article>
    <p>
    <article>
        ${Letters()}
    </article>
    `
}