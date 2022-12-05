// require('shelljs/global');

// var inquirer = require('inquirer');
// let organization = 'single-unit'
const fs = require('fs')
const dir =
	(process.env.WORKBENCH_FOLDER && process.env.WORKBENCH_FOLDER !== 'Main')
		? `@containers/${process.env.WORKBENCH_FOLDER}/index.js`
		: '@containers/Main.js' 
let result = `import Content from "${dir}";export default Content;`

fs.writeFileSync('./src/entry.js', result, 'utf8');