function registrationNumbers() {
    const pattern = /^(?:ca|ck|cj|cl|CA|CK|CJ|CL)-\d{3}-\d{3}$/i;
    const caTest =/^(?:ca|CA)-\d{3}-\d{3}$/;
    const ckTest =/^(?:ck|CK)-\d{3}-\d{3}$/;
    const cjTest =/^(?:cj|CJ)-\d{3}-\d{3}$/;
    const clTest = /^(?:cl|CL)-\d{3}-\d{3}$/;
    const cityList = [];
    var myRegNumbers = [];
    var regNumber = "";
    function setRegNum(Num) {
        var regNum = Num.trim();
    
        if (pattern.test(regNum)) {
            regNumber = regNum;
            myRegNumbers.push(regNumber);
            return true;
        }
        else {
            return false;
        }
    }
    function getRegNum() {
        return regNumber;
    }

    
    function addRegNum() {
        return myRegNumbers;
    }
    function cityFilter(city) {
        for (var i = 0; i < myRegNumbers.length; i++){
            if (city === "capetown") {
              if (caTest.test(myRegNumbers[i])) {
                cityList.push(myRegNumbers[i]);
              }
            } else if (city === "malmesbury") {
              if (ckTest.test(myRegNumbers[i])) {
                cityList.push(myRegNumbers[i]);
              }
            } else if (city === "stellenbosch") {
              if (clTest.test(myRegNumbers[i])) {
                cityList.push(myRegNumbers[i]);
              }
            }
            else if (city === "paarl") {
              if (cjTest.test(myRegNumbers[i])) {
                cityList.push(myRegNumbers[i]);
              }
            }
            
        }
        return cityList;
    }
    
       



   

    return {
        setRegNum,
        getRegNum,
        addRegNum,
        cityFilter,
    }
}
