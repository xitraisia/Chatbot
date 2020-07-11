import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import joke from './joke'

describe('Joke Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(joke)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
    })

    it('Sample Test', () => {
        return userConverse
            .conversation(
                user `test`,
                bot `Joke skill works !`
            )
    })
})