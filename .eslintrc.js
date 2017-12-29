module.exports = {
    "extends": ["airbnb-base", "plugin:flowtype/recommended"],
	"plugins": ["jest"],
	"env": {
		"jest/globals": true,
	},
	"rules": {
		"no-param-reassign" : 0,
		"no-mixed-operators" : 0,
	}
};
