class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	login() {
		console.log(this.email, "just logged in");
		return this;
	}
	logout() {
		console.log(this.email, "just logged out");
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.email, "score is now", this.score);
		return this;
	}
}
class Admin extends User {
	deleteUser(user) {
		users = users.filter((u) => {
			return u.email != user.email;
		});
	}
}

let userOne = new User("eslam@hesham.com", "Solom");
let userTwo = new User("momen@hesham.com", "Momen");
let admin = new Admin("admin@eslam.com", "Admin");

let users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);
