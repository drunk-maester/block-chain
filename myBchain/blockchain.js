

const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length-1], data);
    this.chain.push(block);
    return block;
    /*	const lastBlock=this.chain[this.chain.length-1];
		const block=Block.mineBlock(lastBlock,data);*/
		//code replaced and added an inline function 
  }
}

module.exports = Blockchain;

