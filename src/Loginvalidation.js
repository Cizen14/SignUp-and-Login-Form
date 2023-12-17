function Validation(values){
    // alert("")
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === ""){
        error.email ="Email should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.match ="Email didn't match"
    }
    else{
        error.email =""
    }
    
    if (values.name === ""){
        error.name ="Name should not be empty"
    }
    else if (!email_pattern.test(values.name)){
        error.match ="Name didn't match"
    }
    else{
        error.name =""
    }
    

    if(values.password === ""){
        error.password ="Password should not be empty"    
    }
    else if (!password_pattern.test(values.password)){
        error.match="Password didn't match"
    }
    else{
        error.password =""
    }
    return error;
    
}
export default Validation;