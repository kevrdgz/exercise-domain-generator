let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

const theDomainNameGenerator = () => {
	for(let i = 0; i < pronoun.length; i++){
		for(let e = 0; e < adj.length; e ++){
			for(let x = 0; x < noun.length; x++){
				console.log(pronoun[i] + adj[e] + noun[x] + ".com");
			}
		}
	}
}
console.log(theDomainNameGenerator());