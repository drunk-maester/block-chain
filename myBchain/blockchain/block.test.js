const Block = require('./block');

describe('Block', () => {
let data, lastBlock, block;
beforeEach(() => {
	data = 'bar';
lastBlock = Block.genesis();
block = Block.mineBlock(lastBlock, data);
});
	
it('`data` to match the input', () => {
expect(block.data).toEqual(data);
});
	
it('if the `lastHash` to match the hash of the last block i.e. linked or not', () => {
expect(block.lasthash).toEqual(lastBlock.hash);
});
})