
function requiredFiled(control, message, type) {
    var Id = "#txt" + control;
    var err = "#err" + control
    var group = "#formGroup" + control;
    if ($(Id).val() == "" || $(Id).val() == null || $(Id).val() == undefined) {

        $(Id).addClass("error-control")
        $(err).html("Please enter " + message)
        return false;
    }
    else {
        if (ValidationType(type).test($(Id).val())) {
            $(Id).removeClass("error-control")
            $(err).html("")
            return true;
        }
        else {
            $(Id).addClass("error-control")
            $(err).html("Please enter valid " + message)
            return false;
        }
    }
}

function requiredSelectFiled(control, message) {
    var Id = "#ddl" + control;
    var err = "#err" + control
    var group = "#formGroup" + control;
    if ($(Id).val() == "" || $(Id).val() == null || $(Id).val() == "-1") {

        $(Id).addClass("error-control")
        $(err).html("Please select " + message)
        return false;
    }
    else {
        $(Id).removeClass("error-control")
        $(err).html("")
        return true;
    }
}

function ValidationType(type) {
    var regx = "";
    switch (type) {
        case "email":
            regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;

        case "mobile":
            regx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
            break;

        case "numeric":
            regx = /^\d+$/;
            break;
        default:
            regx = /(.*?)/
            break;
    }
    return regx;
}

