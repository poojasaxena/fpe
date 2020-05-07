# Testing
const tes = require('./fpe'); 
const cipher = tes({});


text = '15.10.23.4'

node = cipher.encrypt(text);
console.log('encrytion of '+ text + ' is : ' +node)

node2 = cipher.decrypt(node)
console.log('decryption of '+node + ' is : '+node2)
