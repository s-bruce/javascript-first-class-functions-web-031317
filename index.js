function receivesAFunction(callback) {
	callback()
}

function returnsANamedFunction() {
	function whatever() {
		console.log("whatever")
	}
	return whatever
}

function returnsAnAnonymousFunction() {
	return function() {console.log("secret")}
}