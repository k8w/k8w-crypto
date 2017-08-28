import Crypto from "../index";
const assert = require('assert');

describe('Crypto', function(){
    it('base64', function(){
        let src = '{"a":"小\'哈\'图"}';
        let encoded = Crypto.base64Encode(src);
        let decoded = Crypto.base64Decode(encoded);
        assert.strictEqual(decoded, src);
    })

    it('md5', function () {
        assert.strictEqual(Crypto.md5('小哈图'), 'ee3d30394915007b145a4f3868f02a82')
    })
});