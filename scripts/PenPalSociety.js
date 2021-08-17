import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"


export const penPalSociety = () => {
    return `
    <h1 class="header">🖋️ Pen Pal Society 🖋️</h1>

    <article class="letter-form-container">
        <section>
            ${LetterForm()}
        </section>
        <section class="image-beside-form">
            <img src="/images/virginia-poe.jpg"/>
        </section>
    </article>
    <p>
    <article>
        ${Letters()}
    </article>
    `
}