class RetiredForagerBee extends ForagerBee {
  constructor() {
  	super();
  	this.age = 40;
  	this.color = 'grey';
  	this.job = 'gamble';
  	this.canFly = false;

  	this.forage = () => 'I am too old, let me play cards instead';
    this.gamble = () => this.treasureChest.push('treasure');

  }
};
