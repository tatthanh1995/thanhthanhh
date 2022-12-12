function chuyendoitiente() {
let amount = document.getElementById("amount").value;
let FromC = document.getElementById("from").value;
let ToC = document.getElementById("to").value;
let Result;


    if (FromC == "USD" && ToC == "VND") {
        Result = "result: " + (amount * 23000) + " Đ";
    }
    else if (FromC == "VND"&& ToC =="USD"){
        Result = "result: "+ (amount / 23000) + " $";
    }
    else if (FromC == "VND") {
        Result = "result: " + amount + " Đ"
    } else {
        Result = "result: " + amount + " $"
    }

    document.getElementById("result").innerHTML = Result;
}
