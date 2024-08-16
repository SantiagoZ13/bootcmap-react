function managePackages(method, type, packages){
    if(type == "-D" || type == "--dev"){
        type = "developer"
    }
    console.log(`${method}ing ${packages.join(", ")} in mode ${type}`)
}

/* const parmas = process.argv
const action = parmas[2]
const type = parmas[3]
const packages = parmas[4] */

const [, , action, type, ...packages] = process.argv
if(action == "install" || action == "remove"){
    managePackages(action, type, packages)
}
else{

}