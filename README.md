## format preserving encryption in JS

## Requirements
1. node version 14 or latest
2. just open a node on terminal and copy paste the 'Testing' commands.
3. make sure that fpe.js is in the same directory, whrere you performing test.

## Testing
``` $ node
Welcome to Node.js v14.2.0.
Type ".help" for more information.
> const tes = require('./fpe');
undefined
> const cipher = tes({});
undefined
> text = "95.223.110.111"  
'95.223.110.111'
> node = cipher.encrypt(text);
'10.335.224.222'
> console.log('encrytion of '+ text + ' is : ' +node)
encrytion of 95.223.110.111 is : 10.335.224.222
undefined
> node2 = cipher.decrypt(node)
'95.223.110.111'
> console.log('decryption of '+node + ' is : '+node2)
decryption of 10.335.224.222 is : 95.223.110.111
undefined
```



