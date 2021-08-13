import { getAuthors, getLetters, getTopics } from "./dataAccess.js";

const authors = getAuthors()
const topics = getTopics()
const letters = getLetters()
console.log(authors)


export const LetterForm = () => {

    return `
    <div class="field">
        <label class="label" for="authors">Authors</label>
        <select name="authors" class="input"/>
        <option value="" class="author-option" disabled selected> --Select--</option>
            ${authors.map(author => {
        return `<option value="${author.id}" class="author-option">${author.name}</option>`
    })}
        </select></div>
    <div class="field">    
        <label class="field" for="letterArea">Letter</label>
        <textarea class="letter-area" name="letterArea" rows="10" cols="30"></textarea>
    </div>
    <div class="field">
        ${topics.map(topic => {
        return `
            <input name="${topic.name}" type="radio" value="${topic.id}">${topic.name}</input>`
    })}
    </div>
    <div class="field">
        <label class="label" for="recipients">Recipients</label>
        <select name="recipients" class="input"/>
        <option value="" class="recipient-option" disabled selected> --Select--</option>
            ${authors.forEach(author => {
        return `<option value="${author.id}" class="author-option">${author.name}</option>`
    })}
    </select></div>
    <button name="sendLetter">Send Letter</button>
    
    
    `
}