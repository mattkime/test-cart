module.exports = {
	"parser": "babel-eslint",
    "extends": ["airbnb-base", "plugin:flowtype/recommended"],
	"plugins": ["jest", "flowtype"],
	"env": {
		"jest/globals": true,
	},
	"rules": {
		"no-param-reassign" : 0,
		"no-mixed-operators" : 0,
	}
};
