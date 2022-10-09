$(document).ready(function () {

    $("#btnSubmit").click(function () {
        isValid = requiredFiled("FName", "first name","all");
        if (!isValid) { return false }

        isValid = requiredFiled("LName", "last name","all");
        if (!isValid) { return false }

        isValid = requiredFiled("Email", "email address","email");
        if (!isValid) { return false }

        isValid = requiredFiled("Mobile", "mobile number","mobile");
        if (!isValid) { return false }

        isValid = requiredSelectFiled("Gender", "gender");
        if (!isValid) { return false }

        isValid = requiredFiled("Salary", "last salary", "numeric");
        if (!isValid) { return false }


        if (isValid) {
            alert("form is valid")
        }
    })

})


$("#txtFName").keyup(function () {
    isValid = requiredFiled("FName", "first name","all");
    if (!isValid) { return false }
})

$("#txtLName").keyup(function () {
    isValid = requiredFiled("LName", "last name","all");
    if (!isValid) { return false }
})

$("#ddlGender").change(function () {
    isValid = requiredSelectFiled("Gender", "gender");
    if (!isValid) { return false }
})
