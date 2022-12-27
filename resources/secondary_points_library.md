# Understand a library structure

bundles                     contains umd format
esm2015                     Unflattened ES modules
fesm2015                    Flattened ES modules
.d.ts                       emit declaration... for type annotations
public-api.ts               - 
package.json                - 



Flattened ES modules (FESM)
- where the import statements are removed and the imported code is inlined.
- The package.json's module value points to the FESM version
- notice dist/testing-library/fesm2015
    it has just two files ===> `gopal612-testing-library.js`    `gopal612-testing-library.js.map`
    meaing, all 4 modules (cricket12, image23, libFootball, messages12) will be included in single .js file



Unflattened ES modules (ESM)
- where the import statements are left untouched.


Since moment.js can be used in multiple places like 
- Node JS backends, Angular applications, plain JavaScript 
- it is bundled in UMD and not as ES module.
- UMD bundled libraries are wrapped in an IFFE
    which means that ModuleConcatenation can't be used. 
- There’s no way for the build optimization tools to know if 
    this code will be used (or) has side effects.
- this type of UMD module prevents Angular from running the more advanced bundle optimizations

Secondary entry points for the win
- We can’t control how moment is built. But we can manage our library
- Secondary entry points ====> allow you to specify multiple entry points to your application.
- The first step to enable secondary entry points — for each module add 
    index.ts                    just there to point to the public_api
    public_api.ts               exports all the modules and components 
    package.json                contains ng-packagr specific configurations
    
- 





---------------------------------------------------------------------------------------------------------
# normal structure

`dist/testing-library`                  <testing-library> ===> has 4 modules within itself
bundles 
    gopal612-testing-library.umd.js 
    gopal612-testing-library.umd.js.map 
cricket12 
    classes ===> only .d.ts files 
    components ===> only .d.ts files 
esm2015 
    cricket12, image23, libFootball, messages12 ====> 4 modules
    each module ===> we have 'js' files
fesm2015 
    gopal612-testing-library.js
    gopal612-testing-library.js.map
image23 
    classes ===> only .d.ts files 
    components ===> only .d.ts files 
libFootball 
    classes ===> only .d.ts files 
    components ===> only .d.ts files 
messages12 
    classes ===> only .d.ts files 
    components ===> only .d.ts files 
.d.ts 
package.json 
public-api.d.ts


# Before adding 2nd ng-package.json
- fesm2015 
    gopal612-testing-library.js
    gopal612-testing-library.js.map

# After adding secondary entry points
- in each module
- we have 4 modules (cricket12, image23, libFootball, messages12)
- we will add ng-package.json in each of those modules ===> secondary entry points
- 
-------------------------------------------------------

`dist/categories`                           <categories> ====> has 1 module within lib folder
bundles
    gopal612-categories.umd
    gopal612-categories.umd.js.map
esm2015
    lib/classes
    lib/components
    lib/services
    gopal612-categories.js
    public-api.js
fesm2015
    gopal612-categories.js
    gopal612-categories.js.map
lib
    classes
    components
    services
    categories.module.d.ts
gopal612-categories.d.ts
package.json
public-api.d.ts
-------------------------------------------------------