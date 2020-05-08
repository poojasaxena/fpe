## Requirements
1. node version 14 or latest
2. just open a node on terminal and copy paste the 'Testing' commands.
3. make sure that fpe.js is in the same directory, whrere you performing test.

## Testing
const tes = require('./fpe'); 
const cipher = tes({});

text = '15.10.23.4'

node = cipher.encrypt(text);
console.log('encrytion of '+ text + ' is : ' +node)

node2 = cipher.decrypt(node)
console.log('decryption of '+node + ' is : '+node2)
