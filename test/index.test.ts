import { Comet } from '../dist/index'

it('can be connected', () => {
    const comet = new Comet('ws://172.16.101.107:8888/sub')
    expect.assertions(1)
    return comet
        .authorize({
            appId: 'dtalk',
            token: 'MOCK',
        })
        .then((conn) => expect(conn.readyState).toEqual(1))
})

it('throws error when passed into invalid authorization', () => {
    const comet = new Comet('ws://172.16.101.107:8888/sub')
    expect.assertions(1)
    return comet
        .authorize({
            appId: 'dtalk',
            token: 'random_invalid_token',
        })
        .catch((reason) => expect(reason).toBeInstanceOf(Error))
})
