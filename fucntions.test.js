import { capitalize } from "./capitalize"

test('check', ()=>{
    expect((capitalize('hello'))).toBe('Hello')
})