<!DOCTYPE HTML>
<html>
    <head>
        <meta charset = "utf-8">
       
        <link href="main.css" rel="stylesheet">
    </head>
    <body>
        <p> Start document....</p>
        
        <table class ="table">
            <tr class = "string1">
                <th class="column01">type of paying</th>
                <th class="column02">value</th>
             </tr>
            <tr class = "string2">
                <td class="column11">empty11</td>
                <td class="column12">empty12</td>
                </tr>
            <tr class = "string3">
                <td class="column21">empty21</td>
                <td class="column22">empty22</td>
                </tr>
          
        </table>    
    
         <script>

const persent = 0.1; // 10% годовых
    
    
    const min_summcr = 300000; // минимальная cумма выдачи
    const max_summcr = 8000000; // максимальная cумма выдачи
        var  qustion =prompt("Введите стоимость кредита от 300 тыс. до 8 млн. рублей", 300000); 
        var num = parseInt( qustion); // сумма запрашиваемого кредита
        var period = prompt("На какой срок берете кредит?", 5); // срок кредита
        var num2 = parseInt( period);
        var mainsumm = calculate_mainsumm(num,persent,num2) // расчет всей суммы кредита

        if (num>=min_summcr) {
             if(num2>=1){   
                    var answer = confirm("Вы согласны на ставку 10% годовых?");
                    if(answer==true) {
                        
                    document.write(calculate_mainsumm(num,persent,num2)+ "</br>");
                    document.write(inmounth(mainsumm,num2));
                    }
                    else if (answer==false) {
                        alert("Вы не согласны");
                    }
                    else {
                        alert("Вы не согласны брать кредит");
                    };
            }
            else if(num2>20) {
                alert("Мы не выдаем кредиты на более длительные сроки");
            }
        }   
    
        else if (qustion == null) {
            alert(" Вы отказались от кредита");
        }
        else  if (qustion> max_summcr) 
        { alert("Таких сумм мы не выдаем");
        }
        else {
            alert("Таких сумм мы не выдаем");
        }
           
        
     
            
    
    function calculate_mainsumm(x,y,z) {  // расчет основной суммы кредита
            
                        x = x+((x*y)*z);
                        return x; 
                }

            
            
            

    
    function inmounth(r,z) {  // расчета суммы месячного платежа
            r = r/(z*12);
            return r.toFixed(2);
        }            
            
            
     

</script>




        
   




        
            </body>
</html>