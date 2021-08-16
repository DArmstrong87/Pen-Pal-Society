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
    const foundAuthor = authors.filter(
        author => {
            for (const letter of letters) {
                return author.id === letter.authorId
            }
        }
    )
    const foundRecipient = authors.filter(
        author => {
            for (const letter of letters) {
                return author.id === letter.recipientId
            }
        }
    )
    const foundTopic = topics.filter(
        topic => {
            for (const letter of letters) {
                return topic.id === letter.topicId
            }
        }
    )
    console.log(letters)

    return ` 
    ${letters.map(
        letter => {
            return `
            <div class="letters">
            Dear ${foundAuthor.name} (${foundAuthor.email})
            <p>${letter.letterBody}
            </p>
            <p>
            Sincerely, ${foundRecipient.name} (${foundRecipient.email})
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