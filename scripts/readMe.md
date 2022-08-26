# Access token
- An access token is an alternative to using your username and password 
    for authenticating to npm 
    when using the API (or) the npm command-line interface (CLI). 
- An access token is a hexadecimal string that you can use 
    to authenticate
    which gives you the right to install and/or publish your modules.
- Two ways to generate access token
    The npm CLI automatically generates an access token for you when you run `npm login`
    create an access token to give other tools (such as CI/CD) access to your npm packages

Generated access token for my npmjs account
- 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
- This token will only be displayed once it seems
- probably, save this token in .npmrc account

command to publish
`bash scrips/builder23.sh major`
`bash scrips/builder23.sh minor`
`bash scrips/builder23.sh patch`


# Images
- see the `package.json` in each library
- it is with this name that package gets published in npmjs (or) your own verdaccio
    name must be unique..
    thats why I cant use products (or) categories
    I had to use gopal612-products, gopal612-categories
- see the `ng-package.json`
    this file gives the schema          <dont know>
    destination (where to put the build output)
        if you notice for testing-library there was /* at the end
        see the folder structure in dist folder too
        it messed up by builder23.sh script...
        but now I corrected it any

    