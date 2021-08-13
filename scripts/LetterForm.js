import { getAuthors, getTopics, sendLetter } from "./dataAccess.js";

document.addEventListener("click",
    click => {
        if (click.target.name === 'sendLetter') {
            let userAuthor = document.querySelector("option[name='author']").value
            let userLetter = document.querySelector("textarea[name='letterArea']").value
            let userTopic = document.querySelector("input[name='topic']").value
            let userRecipient = document.querySelector("option[name='recipient']").value

            const dataToSendToAPI = {
                authorId: parseInt(userAuthor),
                letterBody: userLetter,
                topicId: parseInt(userTopic),
                recipientId: parseInt(userRecipient),
                dateSent: Date.now()
            }
            sendLetter(dataToSendToAPI)
        }
    }
)

export const LetterForm = () => {
    const authors = getAuthors()
    const topics = getTopics()

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
        <textarea name="letterArea" rows="10" cols="30"></textarea>
    </div>
    <div class="topic-radios">
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
        return `<option value="${author.id}" class="recipient-option" name="recipient">${author.name}</option>`
    })}
    </select></div>
    <button name="sendLetter">Send Letter</button>
    `
}