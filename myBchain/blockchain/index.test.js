const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
  let bc,bc2;
  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it('if it starts with the genesis block ?', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('if it adds a new block ?', () => {
    const data = 'foo';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });
  it('if validates a valid chain or not', () => {
  bc2.addBlock('foo');
  expect(bc.isvalid(bc2.chain)).toBe(true);
});
it('if it invalidates a chain with a corrupt genesis block or not', () => {
  bc2.chain[0].data = 'Bad data';
  expect(bc.isvalid(bc2.chain)).toBe(false);
});

it('if it invalidates a corrupt chain or not', () => {
  bc2.addBlock('foo');
  bc2.chain[1].data = 'Not foo';
  expect(bc.isvalid(bc2.chain)).toBe(false);
});
});
