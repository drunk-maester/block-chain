const Block=require('./block');

const fooBlock =Block.mineBlock(Block.genesis(),'foooo');
console.log(fooBlock.toString());