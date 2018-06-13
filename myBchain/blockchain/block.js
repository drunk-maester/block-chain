const SHA256 = require('crypto-js/sha256');
class Block {
	constructor(timestamp, lasthash, hash, data) 
	{
		this.timestamp=timestamp;
		this.lasthash=lasthash;
		this.hash=hash;
		this.data=data;

	}

	toString()
	{
		//printing hash value partially
		return `block -
			timestamp = ${this.timestamp}
			lasthash  = ${this.lasthash.substring(0,7)}
			hash      = ${this.hash.substring(0,7)}
			data	  = ${this.data}
			`;
	}
	// static enable us to call this function without having 
	// to make new instance of the Block
	static genesis()
	{
		//dummy values
		return new this('genesis','----','f1h75s-123',[]);


	}
	static mineBlock(lastBlock,data)
	{
		const timestamp=Date.now();
		const lasthash=lastBlock.hash;
		const hash=Block.hash(timestamp,lasthash,data);

		return new this(timestamp,lasthash,hash,data);
	}
	static hash(timestamp,lasthash,data)
	{
      return SHA256(`${timestamp}${lasthash}${data}`).toString();
	}
	//caluc hash from the block
	static blockHash(block)
	{
		const { timestamp ,lasthash ,data} =block;
		return Block.hash(timestamp,lasthash,data);
	}
}

module.exports = Block;
