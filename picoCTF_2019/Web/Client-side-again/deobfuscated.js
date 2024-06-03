
                          0          1         2         3                           4                      5            6          7           8            9              
  var stringVector = ['0a029}', '_again_5', 'this', 'Password\x20Verified', 'Incorrect\x20password', 'getElementById', 'value', 'substring', 'picoCTF{', 'not_this'];
(function(param1, param2) {
    var rezLambF = function(fPointer) {
        while (--fPointer) {
        param1['push'](param1['shift']());
        }
    };
    rezLambF(++param2);
}(stringVector, 0x1b3));///this function is used to change the order of the strings 
var getF = function(param_f1, param2_f1) {///param2_f1 is not used
    param_f1 = param_f1 - 0x0;///this does nothing because 0x0 is 0 in hex :))
    var resultString = stringVector[param_f1];
    return resultString;
};////So this functions acts like the get functiont for this vector so I ll rename it "getF"

function verify() {///
    checkpass = document[getF('0x0')]('pass')[getF('0x1')];///this should get the input string so that means it should call getElementById
    split = 0x4;
    if (checkpass[getF('0x2')](0x0, split * 0x2) == getF('0x3')) {///picoCTF{    1    cause it starts from 0   and ends on split * 0x2
        if (checkpass[getF('0x2')](0x7, 0x9) == '{n') {///useless
            if (checkpass[getF('0x2')](split * 0x2, split * 0x2 * 0x2) == getF('0x4')) {///not_this    2    cause it start from  split * 0x2  and ends on  split * 0x2 * 0x2
                if (checkpass[getF('0x2')](0x3, 0x6) == 'oCT') {///useless
                    if (checkpass[getF('0x2')](split * 0x3 * 0x2, split * 0x4 * 0x2) == getF('0x5')) {///0a029}    4   cause it starts on split * 0x3 * 0x2
                        if (checkpass['substring'](0x6, 0xb) == 'F{not') {////useless
                            if (checkpass[getF('0x2')](split * 0x2 * 0x2, split * 0x3 * 0x2) == getF('0x6')) {///_again_5     3   cause it starts on split * 0x2 * 0x2 and ends on split * 0x3 * 0x2
                                if (checkpass[getF('0x2')](0xc, 0x10) == getF('0x7')) {///this
                                    alert(getF('0x8'));///Password Verified
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        alert(getF('0x9'));///Incorrect password
    }
} 
///Password is picoCTF{not_this_again_50a029}
/*Using the console I got 
order :
getElementById 0
value          1
substring      2 
picoCTF{       3
not_this       4 
0a029}         5
_again_5       6
this            7
Password Verified 8
Incorrect password 9