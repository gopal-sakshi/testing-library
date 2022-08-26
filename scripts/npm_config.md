# npm config settings
- npm gets its config settings from
    command line, 
    environment variables, 
    .npmrc
    
# relevant files
- per-project config file (/path/to/my/project/.npmrc)      <!-- may be I will try this first... -->
- per-user config file (~/.npmrc)                           <!-- probably this is in home folder... I do not know -->
- global config file ($PREFIX/etc/npmrc)                    <!-- I do not have global config file -->
- npm builtin config file (/path/to/npm/npmrc)          <!-- npm is installed in home folder... so, I have .npmrc in home folder -->

# Info
- All npm config files are an ini-formatted list of key = value parameters.
- comments ==> start with # (or) ;
- project-specific npmrc overrides global npmrc config


# Settings
- _auth, _authToken, username, _password must all be scoped to a specific registry

# Examples

`bad config`
_authToken=MYTOKEN

`good config`
@myorg:registry=https://somewhere-else.com/myorg
@another:registry=https://somewhere-else.com/another
//registry.npmjs.org/:_authToken=MYTOKEN
; would apply to both @myorg and @another
; //somewhere-else.com/:_authToken=MYTOKEN
; would apply only to @myorg
//somewhere-else.com/myorg/:_authToken=MYTOKEN1
; would apply only to @another
//somewhere-else.com/another/:_authToken=MYTOKEN2