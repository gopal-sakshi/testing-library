log() {
  printf "\n\e[1;37;32m[INFO]\e[0;97;49m $1"
    #       \n ===> print in new line
    #       \e[1;37;32m[INFO]\e[    ----> print INFO in green color may be
}

pushNotification() {
    # It seems there is not much difference between push notification & log()
    printf "\n\e[1;37;32m[INFO]\e[0;97;49m $1"
}

testUtilityFunctions() {
    log "log starts... argument ===> $1"
    pushNotification "push notification starts ===> $1" 
}

cleanBuildDirectory() {
    rm -rf build
    echo    # this blank echo ===> so that command gets printed in next line
    echo "build cleaned re"
}

## --------------------------------- ################### -------------------------------------------- ##############

updateVersion() {
    cd "projects/$1" &&                         # we will navigate into "projects/categories" folder
                                                    # next iteration we will navigate into "projects/products" folder
                                                    # co-incidentally... it contains package.json...
                                                    # if you do npm version (or) npm version 1.2.32 ----> 
                                                    # it increments/updates the version in package.json accordingly
                                                    # if you want to verify... directly open categories folder in terminal & do "npm version"
                                                    # how come $2 ===> minorv0.4.0 ====> even though we did not pass any argument
    # log "this is what is argument 2 ===> $2"                                                    
    npm version $2 &&
    cd ../../
    if [ $? != 0 ]; then
        logError "Unable to update '$library' package version "
        return 1
    fi
    return 0
}

verifyVersion() {
    success=0
    case $1 in
        major)
        log "This is MAJOR ===> $1"
        echo "--- so, we will not modify success to 1"
        ;;
        minor)
            log "This is MINOR ===> $1"
            echo "--- so, we will not modify success to 1... it seems case in bash script ends with ;; "
        ;;
        patch)
            echo
            echo "patch lo ki vachaavu abbaayi";
        ;;
        [1234567890].[1234567890].[1234567890][1234567890])
        ;;
        *)
        logError "Invalid version param. Valid params (<newversion> | major | minor | patch)"
        success=1
        ;;
    esac

  return "$success"
}
## --------------------------------- ################### -------------------------------------------- ##############

buildLibrary() {
    log "Building $1 please wait doctorey...\n"
    node --max_old_space_size=6144 ./node_modules/@angular/cli/bin/ng build $1
    # Build failed
    if [ $? != 0 ]; then
        # logError "Failed to build $1"
        exit 1
    fi

    log "Packing $1 please wait nurseeeey...\n" &&
    path="$1"
    cd "dist/$path" 
    echo "$PWD"    
    npm pack --silent                            # Pack the library
    cp *.tgz ../../build/                   # Copy the packed library to build directory
    cd ../../                                    # Move back to home directory  
}

buildAllPackages() {
    mkdir build
    echo "dir build created"
    # verifyVersion $1
    # if [ $? == 1 ]; then
    #     return 1
    # fi    
    librariesList=(categories products testing-library)              # this is how it was in kalgudi-core-libraries
    # librariesList=(categories)                                       # just testing single library
    # librariesList = (features)                                  # this is how it was in ecommerce-ui-lib
    for library in ${librariesList[@]}; do
        # log "Please wait while I build $library"
        updateVersion $library $1           # Calling this method with 2 arguments
        if [ $? != 0 ]; then
            return 1
        fi
        buildLibrary $library
    done
    return 0
}

## --------------------------------- ################### -------------------------------------------- ##############

listBuildPackages() {
    echo "$PWD"
    # list all the folders/files inside the build folder
    packages=`ls build`
    # packages = `ls build`         # if you give spaces.... then it throws error... command not found
    echo ''
    log 'Packages I built successfully\n'

    # Print all packages to console
    for package in $packages; do
        publishPackage "$package"
        # log $package
    done

    # Print all packages to console
    for package in $packages; do
        log $package
    done

    echo
}

publishPackage() {
    echo "inside publish package23 ......... \n"
    success=0    
    registryUrl="https://registry.npmjs.org"
    log "Publising $1 to $registryUrl"
    cd build
    npm publish "$1" --registry $registryUrl
    if [ $? == 0 ];then
        log "Package published successfully"
    else
        logError "Unable to publish package"
        success=1
    fi
    cd ../
    return $success
}

## --------------------------------- ################### -------------------------------------------- ##############

main() {
    errorMsg="Failed to build all packages, please see build logs";
    successMsg="Successfully build all Kalgudi Core packages";
    # testUtilityFunctions $1
    
    cleanBuildDirectory $1                 # Clean previous builds
    buildAllPackages $1                 # Build all latest packages
    
    if [ $? != 0 ]; then                # In case buildAllPackages failed
        # logError $errorMsg
        pushNotification $errorMsg
        return 1
    fi

    listBuildPackages                   # List all packages

    # if [ $? != 0 ]; then                # Verify if all libraries listed & packed successfully
    #     logError "$errorMsg"
    #     pushNotification "$errorMsg"
    #     exit 1
    # fi

    # log "$successMsg"                   # Build success
    # pushNotification "$successMsg"
    # echo "emito idi"
}

main $1