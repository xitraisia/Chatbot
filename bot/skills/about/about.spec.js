import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import about from './about'

describe('About Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(about)
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
                bot `About skill works !`
            )
    })
})