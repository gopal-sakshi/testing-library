cleanBuildDirectory() {    
    rm -rf build
    echo ""
}

main() {
    errorMsg="Failed to build all packages, please see build logs";
    successMsg="Successfully build all Kalgudi Core packages";
    
    cleanBuildDirectory                 # Clean previous builds
    # buildAllPackages $1                 # Build all latest packages
    
    # if [ $? != 0 ]; then                # In case buildAllPackages failed
    #     logError $errorMsg
    #     pushNotification $errorMsg
    #     return 1
    # fi

    # listBuildPackages                   # List all packages

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