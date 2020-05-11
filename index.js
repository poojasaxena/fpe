exports.name = 'FPE Encryption';
exports.version = '0.1';

const crypto = require('./fpe');
const cipher = crypto({});


const ipv4Regex = /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/gm;
const cache = {};

//We first match all the instances of the IPv4 regex we find in the _rawfield.
//For each match, we add a promise to an array which we then pass to Promise.all.
// With Promise.all, our function will wait for all DNS resolutions to complete before calling our .then()implementation then merges back in the DNS responses to the event object itself before returning it.
// The meat of the logic for the function is in the resolvefunction we’ve implemented which wraps Node’s dns.reversein a promise:
//const value = [`dns${midx !== 1 ? midx.toString() : ''}`, hostnames.join(' ')]; // if idx is not 1, name field dns2, dns3, etc

function doEncryption(IP) {
//module.exports.doEncryption = function(IP) {
    if (!cache[IP]) {
        const value = cipher.encrypt(IP);                                                                                                                                
        cache[IP] = {value: value};                                                                                                                                      
    }                                                                                                                                                                    
    return cache[IP].value;                                                                                                                                              
}                                                                                                                                                                        


// Our function defines a few module level variables,
//   1. importing Node’s dnsmodule,
//   2. setting up a cachevariable
//   3. defining a RegEx we will use for matching IPv4 addresses.
// Let’s look at our processimplementation:

exports.disabled = 0;
exports.asyncTimeout = 500; // ms

exports.process = (event) => {
    const promises = [];
    let matches;
    let matchIdx = 1;
    ipv4Regex.lastIndex = 0; // ensure this is properly reset
    while (matches = ipv4Regex.exec(event._raw)) {
	const midx = matchIdx;
	const IP = matches[0];
	promises.push(doEncryption(IP));
	matchIdx++;
    }
    if (promises.length === 0) {
	return event;
    }
    return Promise.all(promises)
        .then((entries) => {
	    entries.filter(e => e !== undefined).forEach(e => {
		event[e[0]] = e[1];
	    });
	    return event
	})
        .catch(() => {
	    return event;
	});
};

