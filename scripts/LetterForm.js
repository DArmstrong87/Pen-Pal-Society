import { getAuthors, getLetters, getLetterTopics, getTopics, sendLetter, sendLetterTopic } from "./dataAccess.js";

/* Event "change" listener:
Each checked topic will POST its own unique id as a LetterTopics object.
Each object will have an id, letterId and a topicId.
The letterId of each of these objects will match the current letter.id before the letter is posted.
LetterTopics will be iterated and matched with the letterId.
Topics will be iterated and match with letterTopics.topicId
*/

document.addEventListener("change",
    checked => {
        const checkedTarget = checked.target.name.startsWith('topic--')
        if (checkedTarget) {
            const [, topicId] = checked.target.name.split("--")
            const letters = getLetters()
            const findCurrentLetterId = () => {
                const lastIndex = letters.length - 1
                const currentId = letters[lastIndex].id + 1
                return currentId
            }
            const currentLetterId = findCurrentLetterId()
            const userTopic = {
                topicId: parseInt(topicId),
                letterId: currentLetterId
            }
                sendLetterTopic(userTopic)
        }
    }
)

document.addEventListener("click",
    click => {
        if (click.target.name === 'sendLetter') {
            let userAuthor = parseInt(document.querySelector("select[name='authors']").value)
            let userLetter = document.querySelector("textarea[name='letterArea']").value
            let userRecipient = parseInt(document.querySelector("select[name='recipients']").value)
            if (userAuthor === userRecipient) {
                window.alert('You cannot send a letter to yourself.')
            } else {
                const dataToSendToAPI = {
                    authorId: userAuthor,
                    letterBody: userLetter,
                    recipientId: userRecipient,
                    dateSent: Date.now()
                }
                sendLetter(dataToSendToAPI)
            }
        }
    }
)

export const LetterForm = () => {
    const authors = getAuthors()
    const topics = getTopics()

    return `
    <div class="field">
        <label class="label" for="authors">Author</label>
        <select name="authors" class="input authors-menu"/>
            <option value="" class="author-option" disabled selected> --Select--</option>
                ${authors.map(author => {
        return `<option value="${author.id}" name="author" class="author-option">${author.name}</option>`
    })}
        </select></div>
    <div class="field">    
        <label class="label" for="letterArea">Letter</label>
        <textarea name="letterArea" rows="10" cols="30"></textarea>
    </div>
    <label class="field label" for="topics">Topics</label>
    <div class="topic-checkboxes" name="topics">
        ${topics.map(topic => {
        return `
            <input class="topic-checkbox" name="topic--${topic.id}" type="checkbox" value="${topic.id}">${topic.name}</input>`
    }).join("")}
    </div>
    <div class="field">
        <label class="label" for="recipients">Recipient</label>
        <select name="recipients" class="input authors-menu"/>
            <option value="" class="recipient-option" disabled selected> --Select--</option>
                ${authors.map(author => {
        return `<option value="${author.id}" class="recipient-option" name="recipient">${author.name}</option>`
    })}
    </select>
    <button class="sendLetter" name="sendLetter">Send Letter<br>📩</button>
    </div>
    `
}