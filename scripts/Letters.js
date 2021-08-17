import { deleteLetter, getAuthors, getLetters, getLetterTopics, getTopics } from "./dataAccess.js";

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
            const letterTopics = getLetterTopics() //array
            const foundLetterTopics = letterTopics.filter(
                letterTopic => {
                    return letterTopic.letterId === letter.id
                }
            )
            const foundTopics = topics.filter(
                topic => {
                    for (const letterTopic of foundLetterTopics) {
                        if (topic.id === letterTopic.topicId) {
                            return topic
                        }
                    }
                }
            )

            const dateSent = new Date(letter.dateSent)
            return `
            <div class="letters">
                Dear ${foundRecipient.name} (${foundRecipient.email})
                <p>${letter.letterBody}</p>
                <p>Sincerely, ${foundAuthor.name} (${foundAuthor.email})</p>
                <div class="topics-p">
                ${foundTopics.map(foundTopic => {
                return `<div class="topic">${foundTopic.name}</div>`
            }).join("")}
                </div>
                <p class="date">Sent on ${dateSent}</p>
                <div class="deleteDiv">
                    <button class="deleteButton" name="deleteLetter" id="delete--${letter.id}">Delete
                    </button>
                </div>
            </div>`
        }
    ).join("")}
    </div>
    `
}