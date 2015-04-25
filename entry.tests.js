// for every file in ./src, recursevly look for files that match the regex 
// then, forEach key, require that file.
var context = require.context('./src', true, /.test\.js$/);
context.keys().forEach(context);