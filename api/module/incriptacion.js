const bcryptjs = require('bcryptjs');

let encryp = async (incrip) =>{
    return await bcryptjs.hash(incrip, 8);
};

let comparar = async (pass , haspas) =>{
    return await bcryptjs.compare(pass , haspas);
};

 module.exports = {encryp , comparar};