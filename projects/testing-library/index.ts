export * from './src/public-api'

/*
    everything gets exported by individual public-api files
    at the end, we include index.ts at the top level... 
    index.ts is at ----> "testing-libarary"
        import { SquadCricketComponent } from 'projects/testing-library';
    index.ts is at ----> "testing-libarary/src"
        import { SquadCricketComponent } from 'projects/testing-library/src';


    APPLICATION LEVEL

    APPROACH A -------------------
        import { Messages12Module, some_injection_token } from 'projects/testing-library';
        "paths": {              --------> in tsconfig.json
            "testing-library": ["projects/testing-library"],
            "testing-library/*" :["projects/testing-library/*"]
        }
        any changes in LIBRARY ----> automatically recompiles the APPLICATION

        (OR)

    APPROACH B -------------------
        import { Messages12Module, some_injection_token } from 'testing-library';
        "paths": {
            "testing-library": [ "dist/testing-library/testing-library", "dist/testing-library" ]
        }
        we need to run two terminals here
            ng build testing-library --watch -----------> updates the dist folder
            npm run start                   -----------> whenever dist is updated, this recompiles the app again...

*/