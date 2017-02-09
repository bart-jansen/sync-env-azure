var app = require('commander');

app
    .version('0.0.1')
    .option('-v, --verbose', 'give verbose error messages')

app
    .command('login')
    .description('logging in to azure')
    .action(function () {
        console.log('logged in as bajansen@microsoft.com')
    })

// app
  // .command('pull [test]', 'search with optional query')


  // .command('search [query]', 'search with optional query')
//   .command('list', 'list packages installed', {isDefault: true})
//   .parse(process.argv);


app.parse(process.argv)
