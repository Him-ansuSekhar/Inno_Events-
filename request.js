                
        /* Assuming that the datas from the database are fetched as JSON data.
           The JSON data must have content in the form of an object.
           Each division like description, rules etc. must be the properties of the object.
           And the values of these properties be the content of these divisions to be displayed in the page.
           */

        //Just to make it easier to code, txt file has been used instead of php file.
        //The php must echo the object, so as to use that in the form of response for the request sent.
           

            
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);     
                    
                    document.getElementById("eventname").innerHTML=myObj.name;
                    document.getElementById("content-desc").innerHTML=myObj.description;
                    document.getElementById("content-rules").innerHTML=myObj.rules;
                    document.getElementById("content-judging").innerHTML=myObj.judging;
                    document.getElementById("content-edetails").innerHTML=myObj.edetails;
                    document.getElementById("content-cdetails").innerHTML=myObj.cdetails;
                    
                    
                    

                }
            };
    
            xmlhttp.open("GET", "json_demo.txt", true);
            xmlhttp.send();

