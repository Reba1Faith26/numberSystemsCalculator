function binaryToDecimal(){
        var binaryValues = new Array();
        var binaryIndex = new Array();
        var button = document.getElementById("button");
        var base = 2;
        var binary_fieldset = document.getElementById("binaryValue");

        button.addEventListener("click",function(){
            //step 1 start here
            for(var counting = 0  ; counting < binary_fieldset.value.length ; counting++){
                binaryValues[counting]  = binary_fieldset.value.substring(counting,counting+1) ;
            }
            for(var a = 0  ; a < binaryValues.length ; a++){
                binaryIndex[a] = a;
            }
            for(var b = 0 ; b < binaryValues.length - 1 ; b++){
                for(var c = 0 ; c < binaryValues.length - 1 ; c++){
                    if(binaryIndex[c]<binaryIndex[c+1]){
                        var temporary  = binaryIndex[c];
                        binaryIndex[c] = binaryIndex[c+1];
                        binaryIndex[c+1] = temporary;
                    }
                }
            }

            for(var count = 0 ; count < binaryValues.length ; count++){
            document.write("<h1></h1>");
            document.write("<h2>2<sup></sup>+</h2>");
  
            var addition = " + ";
            var multiplication  = "x";
            var step_one = document.getElementsByTagName("h1");
            var binary_base = document.getElementsByTagName("h2");
            var binary_exponent = document.getElementsByTagName("sup");
            
            step_one[count].style.display = "inline-block";
            step_one[count].style.marginLeft = "5px";
            step_one[count].style.fontSize = "15px";
            step_one[count].innerText = binaryValues[count] + multiplication ;
            
            binary_base[count].style.display = "inline-block";
            binary_base[count].style.marginLeft = "3px";
            binary_base[count].style.fontSize = "14px";
    
            binary_exponent[count].style.display = "inline-block";
            binary_exponent[count].style.marginLeft = "5px";
            binary_exponent[count].innerText = binaryIndex[count];
        }
        //step 1 ended here
        //step 2 begin here
            document.write("<br>");
        for(var d = 0 ; d < binary_fieldset.value.length ; d++){
            document.write("<h3></h3>")
            document.write("<h4><h5><span></h5>")

            var step_two = document.getElementsByTagName("h3");
            var base_answer = document.getElementsByTagName("h4");
            var span = document.getElementsByTagName("h5");

            step_two[d].style.display = "inline-block";
            step_two[d].style.marginLeft = "5px";
            step_two[d].style.fontSize = "15px";
            step_two[d].innerText = binaryValues[d] + multiplication ;

            base_answer[d].style.display = "inline-block";
            base_answer[d].style.marginLeft = "3px";
            base_answer[d].style.fontSize = "14px";
            base_answer[d].innerText = Math.pow(base,binaryIndex[d]);

            span[d].style.display = "inline-block";
            span[d].style.fontSize= "14px";
            span[d].innerText = "+";
        }
        //step 2 ended here
        //step 3 started here
        document.write("<br>");
        var mid_answer = new Array();
        var answer = 0 ;
        for(var e = 0 ; e < binary_fieldset.value.length ; e++){
            document.write("<h6></h6>");

            mid_answer[e] = binaryValues[e] * Math.pow(base,binaryIndex[e]);

            var step_three = document.getElementsByTagName("h6");
            step_three[e].style.display = "inline-block";
            step_three[e].style.fontSize = "14px";
            step_three[e].innerText = mid_answer[e] + "+";

            answer = answer + mid_answer[e];
        }
        document.write("<br>");
        document.write(answer);
        },false);  
}
binaryToDecimal();