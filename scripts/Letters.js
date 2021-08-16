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
            return `
            <div class="letters">
            Dear ${foundRecipient.name} (${foundRecipient.email})
            <p>${letter.letterBody}
            </p>
            <p>
            Sincerely, ${foundAuthor.name} (${foundAuthor.email})
            </p>
            <p>
            <dic class="topic">${foundTopic.name}</div>
            </p>
            <button name="deleteLetter" id="delete--${letter.id}">Delete</button>
            </div>`
        }
    ).join("")}
    `
}