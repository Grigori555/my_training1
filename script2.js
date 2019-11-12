
// format input 

function main_calc() {

playSound1();
win();
 
 // modal true
                     
        var modal1 = document.getElementById("myModal1"); // window
                                
        span1 = document.getElementsByClassName("close1")[0]; // close
        modal1.style.display="block";

                                            // congratulations
                                
        document.getElementById('win').innerHTML = "Поздравляем, выполнено!";
        document.getElementById('win').style.color = "green";
        document.getElementById('win').style.fontWeight = "bolder";
                                
        span1.onclick= function() { // close
        modal1.style.display="none";
        playSound4();
        }
        window.onclick=function() { // click window - close
        if(event.target== modal1) {
         modal1.style.display="none";
                                    }
        }
                                      
                                
                                
                                

    var num1, num2, num3, num4,num5, result1, result2, result3, result4;
    num1 = document.getElementById('num_1').value; // обращение к элементу summ
    num1 = parseInt(num1); // преобразование  в целое  число // age
    num2 = document.getElementById('num_2').value;
    num2 = parseInt(num2);
    num3 = document.getElementById('num_3').value; // %
    num3 = parseFloat(num3);
    num4 =12;
    num5 = document.getElementById("out1").value;
    check1 = "";
    check2 = "";
    check3 = "";
    // style text css manager
    document.body.style.backgroundColor = "green";
    document.getElementById('out1').style.color = "yellow";
    document.getElementById('out2').style.color = "yellow";
    document.getElementById('out3').style.color = "yellow";
    document.getElementById('out4').style.color = "yellow";

    document.getElementById('four').style.color = "yellow";
    document.getElementById('five').style.color = "yellow";
    document.getElementById('six').style.color = "yellow";
    document.getElementById('seven').style.color = "yellow";


    document.getElementById('out1').style.fontWeight = "bolder";
    document.getElementById('out2').style.fontWeight = "bolder";
    document.getElementById('out3').style.fontWeight = "bolder";
    document.getElementById('out4').style.fontWeight = "bolder";

    document.getElementById('four').style.fontWeight = "bolder";
    document.getElementById('five').style.fontWeight = "bolder";
    document.getElementById('six').style.fontWeight = "bolder";
    document.getElementById('seven').style.fontWeight = "bolder";

// conditions for win music modal true






    // calculates



// roots
        result1 = calculate_mainsumm(num1,num2,num3);
        document.getElementById('out1').innerHTML = format(result1);

       

      
    
        result2=inmounth(num1,num2, num3,num4);
        document.getElementById('out2').innerHTML = format(result2);
        
        result3=per_year(num1,num3);
        document.getElementById('out3').innerHTML = format(result3);

        result4=main_year(num1,num2,num3);
        document.getElementById('out4').innerHTML = format(result4);
        
        $(".column11").html("4.Общая сумма, руб.");
        $(".column21").html("5.Платеж в месяц, руб.");
        $(".hello").html("6.Расчет процента годовых, руб.");
        $(".hi").html("7.Общая сумма в год, руб.");
        $("#result").html("Результат:");



// main calc-s

// point 4

            function calculate_mainsumm(x,y,z) {  // расчет основной суммы кредита, x - сумма, y - процент, Z - срок
                    
                         x = x+((x*y/100)*z);
                             return x; 
            }       
  // point 5
            function inmounth(x,z,y,q) {  // расчета суммы месячного платежа
                x = ((x+((x*y/100)*z))/z)/q;
                return x;
            } 
// point 6
            function per_year(x,y) { // расчет суммы процента в год
                x = (x*y/100);
                            
                             return x; 
            }  
// point 7    
            function main_year(x,z,y) { // расчет общей суммы в год
                x = (x+((x*y/100)*z))/z;
                             
                             return x; 
            }    
            
            
                
              // cansel  
                
                
                document.getElementById("clear").onclick = function(e){
                    document.getElementById("num_1").value = "";
                    document.getElementById("num_2").value = "";
                    document.getElementById("num_3").value = "";
                   document.getElementById("error1").innerHTML ="";
                   document.body.style.backgroundColor = "#FFB763";   // изменение стиля фона
                   $("#main_error").hide();
                   $("#main_error1").hide();
                    $("#main_error2").hide();    

                    playSound2();
                    
                    document.getElementById("out1").innerHTML = "empty";
                    document.getElementById("out2").innerHTML = "empty";
                    document.getElementById("out3").innerHTML = "empty";
                    document.getElementById("out4").innerHTML = "empty";
                    document.getElementById("error").innerHTML = "";
                    
                    document.getElementById("result").innerHTML = "Инструкция";
                    document.getElementById("four").innerHTML = "4. Введите значения в пункты с 1-3";
                    document.getElementById("five").innerHTML = "5. Нажмите";
                    document.getElementById("six").innerHTML = "6. кнопку";
                     document.getElementById("seven").innerHTML = "7.\"Рассчитать\"";

                     // cancel style text
                     document.getElementById('out1').style.color = "#4A80FF";
                    document.getElementById('out2').style.color = "#4A80FF";
                    document.getElementById('out3').style.color = "#4A80FF";
                    document.getElementById('out4').style.color = "#4A80FF";

                    document.getElementById('four').style.color = "#4A80FF";
                    document.getElementById('five').style.color = "#4A80FF";
                    document.getElementById('six').style.color = "#4A80FF";
                    document.getElementById('seven').style.color = "#4A80FF";


                    document.getElementById('out1').style.fontWeight = "normal";
                    document.getElementById('out2').style.fontWeight = "normal";
                    document.getElementById('out3').style.fontWeight = "normal";
                    document.getElementById('out4').style.fontWeight = "normal";

                    document.getElementById('four').style.fontWeight = "normal";
                    document.getElementById('five').style.fontWeight = "normal";
                    document.getElementById('six').style.fontWeight = "normal";
                    document.getElementById('seven').style.fontWeight = "normal";
                }
        }




// format of numbers
    
                            function format(n, sep, decimals) {
                             sep = sep || "."; // Default to period as decimal separator
                            decimals = decimals || 2; // Default to 2 decimals

                            return n.toLocaleString().split(sep)[0]
                                + sep
                                + n.toFixed(decimals).split(sep)[1];
                                }

    
// audioclick

// reasonable
     function playSound1() {
          var sound = document.getElementById("audio1");
          sound.play();
      }
      function playSound2() {
          var sound = document.getElementById("audio2");
          sound.play();
      }
      function playSound3() {
          var sound = document.getElementById("audio3");
          sound.play();
      }
      function playSound4() {
          var sound = document.getElementById("audio4");
          sound.play();
      }
      // win
      function win() {
          var sound = document.getElementById("audio5");
          sound.play();
      }


      
     //  Drag’n’Drop  
/*
     var ball = document.getElementById('myModal1');

     ball.onmousedown = function(e) {
     
       var coords = getCoords(ball);
       var shiftX = e.pageX - coords.left;
       var shiftY = e.pageY - coords.top;
     
       ball.style.position = 'absolute';
       document.body.appendChild(ball);
       moveAt(e);
     
       ball.style.zIndex = 1000; // над другими элементами
     
       function moveAt(e) {
         ball.style.left = e.pageX - shiftX + 'px';
         ball.style.top = e.pageY - shiftY + 'px';
       }
     
       document.onmousemove = function(e) {
         moveAt(e);
       };
     
       ball.onmouseup = function() {
         document.onmousemove = null;
         ball.onmouseup = null;
       };
     
     }
     
     ball.ondragstart = function() {
       return false;
     };
     
     function getCoords(elem) {   // кроме IE8-
       var box = elem.getBoundingClientRect();
       return {
         top: box.top + pageYOffset,
         left: box.left + pageXOffset
       };
     } */