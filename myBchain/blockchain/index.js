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

  isvalid(chain)
  {
  	if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis()))
  		{return false; }

  	for (let i = 1;i < chain.length; i++) {
  		const block=chain[i];
  		const lastBlock=chain[i-1];
  		if(block.lasthash !== lastBlock.hash || block.hash !== Block.blockHash(block))
  		{
  			return false;
  		}
  	}
  	return true;
  }

  replaceChain(newchain)
  {
  	//larger chains are placed
  	if(newchain.length<=this.chain.length)
  	{
  		console.log(`Received chain isn't long than current chain`);
 	return; 		
  	}else if(!this.isvalid(newchain))
  	{
  		console.log(`received chain isn't valid`);
  		return;
  	}
  	console.log('chain updated');
  	this.chain=newchain;
  	//lonest chain -> soln. to forking issue

  }

}

module.exports = Blockchain;

