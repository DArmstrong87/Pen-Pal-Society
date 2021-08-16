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
    <div class="letters-container">
    ${letters.map(
        letter => {
            const foundAuthor = authors.find(
                author => {
                    return author.id === letter.authorId
                }
            )
            const foundRecipient = authors.find(
                author => {
                    return author.id === letter.recipientId
                }
            )
            const foundTopic = topics.find(
                topic => {
                    return topic.id === letter.topicId
                }
            )
            const dateSent = new Date(letter.dateSent)
            return `
            <div class="letters">
            Dear ${foundRecipient.name} (${foundRecipient.email})
            <p>${letter.letterBody}
            </p>
            <p>
            Sincerely, ${foundAuthor.name} (${foundAuthor.email})
            </p>
            <p>
            <div class="topic">${foundTopic.name}</div>
            </p>
            <p class="date">
            Sent on ${dateSent}
            </p>
            <div class="deleteDiv">
            <button class="deleteButton" name="deleteLetter" id="delete--${letter.id}">Delete</button>
            </div>
            </div>`
        }
    ).join("")}
    </div>
    `
}