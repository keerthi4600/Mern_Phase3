var chalk = require( "chalk" );
var path = require( "path" );

console.log( chalk.red.bold( "Using __dirname:" ) );

var fileSystem = require( "fs" );
console.log( path.join( __dirname, "input.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( path.join( __dirname, "input.txt" ) ) ) );

console.log( "" );

console.log( chalk.red.bold( "Using require.resolve():" ) );
console.log( require.resolve( "./input.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( require.resolve( "./input.txt" ) ) ) );
