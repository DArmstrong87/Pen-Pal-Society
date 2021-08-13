import { getAuthors, getTopics } from "./dataAccess.js";


document.addEventListener("change",
    change => {
        if (change.target.name = 'sendLetter') {
            const userAuthor = document.querySelector("input[name='author']").value
            const userLetter = document.querySelector("input[name='letterArea']").value
            const userTopic = document.querySelector("input[name='topic']").value
            const userAuthor = document.querySelector("input[name='author']").value
        }
    }
)

export const LetterForm = () => {
    const authors = getAuthors()
    const topics = getTopics()
    console.log(authors)

    return `
    <div class="field">
        <label class="label" for="authors">Authors</label>
        <select name="authors" class="input"/>
        <option value="" class="author-option" disabled selected> --Select--</option>
            ${authors.map(author => {
        return `<option value="${author.id}" name="author" class="author-option">${author.name}</option>`
    })}
        </select></div>
    <div class="field">    
        <label class="field" for="letterArea">Letter</label>
        <textarea class="letter-area" name="letterArea" rows="10" cols="30"></textarea>
    </div>
    <div class="field">
        ${topics.map(topic => {
        return `
            <input name="topic" type="radio" value="${topic.id}">${topic.name}</input>`
    }).join("")}
    </div>
    <div class="field">
        <label class="label" for="recipients">Recipients</label>
        <select name="recipients" class="input"/>
        <option value="" class="recipient-option" disabled selected> --Select--</option>
            ${authors.map(author => {
        return `<option value="${author.id}" class="author-option">${author.name}</option>`
    })}
    </select></div>
    <button name="sendLetter">Send Letter</button>
    
    
    `
}