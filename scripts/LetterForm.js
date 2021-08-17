import { getAuthors, getLetters, getTopics, sendLetter, sendLetterTopic } from "./dataAccess.js";

document.addEventListener("changed",
    checked => {
        if (checked.target.name.startsWith('topic--')) {
            const [, topicId] = check.target.name.split("--")
            const letters = getLetters()
            const findCurrentLetterId = () => {
                const lastIndex = letters.length - 1
                const lastId = letters[lastIndex].id
                return lastId + 1
            }
            const currentLetterId = findCurrentLetterId()
            const userTopic = {
                topicId: topicId,
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
            let userTopics = []
            let topicChecked = document.querySelectorAll("input[name='topic']:checked")
            topicChecked.forEach(topic => {

                userTopics.push(
                    {
                        topicId: parseInt(topic.value),
                        letterId: letters.length + 1
                    }
                )
            })
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

/*
Each checked topic will POST its own unique id as a LetterTopics object.
For each object, it will have each topic as keys with a boolean as a value. {Business: true}
The id for the LetterTopics object will be set as the letterTopicId when the letter is Posted.
From that Id can be accessed which topics show as true.
Set the last letter's id +1 as the letterId on the LetterTopics object




*/

export const LetterForm = () => {
    const authors = getAuthors()
    const topics = getTopics()

    return `
    <div class="field">
        <label class="label" for="authors">Authors</label>
        <select name="authors" class="input authors-menu"/>
            <option value="" class="author-option" disabled selected> --Select--</option>
                ${authors.map(author => {
        return `<option value="${author.id}" name="author" class="author-option">${author.name}</option>`
    })}
        </select></div>
    <div class="field">    
        <label class="field" for="letterArea">Letter</label>
        <textarea name="letterArea" rows="10" cols="30"></textarea>
    </div>
    <div class="topic-checkboxes">
        ${topics.map(topic => {
        return `
            <input class="topic-checkbox" name="topic--${topic.id}" type="checkbox" value="${topic.id}">${topic.name}</input>`
    }).join("")}
    </div>
    <div class="field">
        <label class="label" for="recipients">Recipients</label>
        <select name="recipients" class="input authors-menu"/>
            <option value="" class="recipient-option" disabled selected> --Select--</option>
                ${authors.map(author => {
        return `<option value="${author.id}" class="recipient-option" name="recipient">${author.name}</option>`
    })}
    </select>
    <button class="sendLetter" name="sendLetter">Send Letter</button>
    </div>
    `
}