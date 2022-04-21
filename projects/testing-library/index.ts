export * from './src/public-api'

/*
    everything gets exported by individual public-api files
    at the end, we include index.ts at the top level... 
    index.ts is at ----> "testing-libarary"
        import { SquadCricketComponent } from 'projects/testing-library';
    index.ts is at ----> "testing-libarary/src"
        import { SquadCricketComponent } from 'projects/testing-library/src';
*/