// class User {
// 	constructor(email, name) {
// 		this.email = email;
// 		this.name = name;
// 		this.score = 0;
// 	}
// 	login() {
// 		console.log(this.email, "just logged in");
// 		return this;
// 	}
// 	logout() {
// 		console.log(this.email, "just logged out");
// 		return this;
// 	}
// 	updateScore() {
// 		this.score++;
// 		console.log(this.email, "score is now", this.score);
// 		return this;
// 	}
// }
// class Admin extends User {
// 	deleteUser(user) {
// 		users = users.filter((u) => {
// 			return u.email != user.email;
// 		});
// 	}
// }

// let userOne = new User("eslam@hesham.com", "Solom");
// let userTwo = new User("momen@hesham.com", "Momen");
// let admin = new Admin("admin@eslam.com", "Admin");

// let users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);

// console.log(users);

// prototypes

function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function () {
	this.online = true;
	console.log(`${this.email} has logged in`);
};
User.prototype.logout = function () {
	if (this.online) {
		this.online = false;
		console.log(`${this.email} has logged out`);
	} else {
		console.log(`you must login first`);
	}
};
function Admin(...args) {
	User.apply(this, args);
	this.role = "admin";
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
	users = users.filter((user) => {
		return user.email != u.email;
	});
};
let userOne = new User("esl2mhesham@gmail.com", "eslam");
let userTwo = new User("momenheshamzaza@gmail.com", "momen");
let admin = new Admin("eslamm@hesham.com", "solom");
let users = [userOne, userTwo, admin];
console.log(users);
console.log(userOne);
console.log(admin);
userOne.login();
userTwo.logout();
userTwo.login();
userTwo.logout();
