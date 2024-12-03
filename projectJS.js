// Event listener that listens for the button click. Once the button is clicked,
// the function myWindow is ran.
document.getElementById("myButton").addEventListener('click',myWindow)


function myWindow()
{
    // regular expression to check if the email is valid. 
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // gets the email from the user
    let email=document.getElementById("Email").value

    // if the email follows the proper email conditions (regex), the meal plan
    // chart is printed to the screen
    if (regex.test(email) == true) {

        // greets the user in the pop-up window
        visitorName = document.getElementById("myInput").value;
        myText = ('<html>\n<head>\n<title>Welcome</title>\n</head>\n<body style="color: hotpink; font-family:Verdana, Geneva, Tahoma, sans-serif; background-color: rgb(250, 232, 241);">\n');
        myText += ("<h2>Hello " + visitorName + ", this is your meal plan for the week!</h2>");
        
        // gets the different meals the user entered and puts them in an organized
        // chart (in HTML) for each day of the week.
        let breakfast = document.getElementById("Breakfast").value
        let snack1 = document.getElementById("Snack1").value
        let lunch = document.getElementById("Lunch").value
        let snack2 = document.getElementById("Snack2").value
        let dinner = document.getElementById("Dinner").value
        let meals = (`Breakfast:<br> ${breakfast}<br><br>
                1st Snack:<br> ${snack1}<br><br>
                Lunch:<br> ${lunch}<br><br>
                2nd Snack:<br> ${snack2}<br><br>
                Dinner:<br> ${dinner}<br><br>`)
        myText += (`
        <table border="1" style="background-color: style="color: white;">
                <tr align="center" style="background-color: hotpink">
                <th width="100" style="color: white;">Sunday</th>
                <th width="100" style="color: white;">Monday</th>
                <th width="100" style="color: white;">Tuesday</th>
                <th width="100" style="color: white;">Wednesday</th>
                <th width="100" style="color: white;">Thursday</th>
                <th width="100" style="color: white;">Friday</th>
                <th width="100" style="color: white;">Saturday</th>
            </tr>
            <tr align="center" style="background-color: rgb(255, 223, 251)">
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
                <td style="color: hotpink;">${meals}</td>
            </tr>
        </table>`)

        myText += (`<br><br><h2 style="color: hotpink;">Enjoy your week!</h2>`)
        myText += (`<button style="color: hotpink; font-family:Verdana, Geneva, Tahoma, sans-serif;" onclick="window.print()">Print</button>
`)
        myText += ("</body>\n</html>")
        // opens pop-up window and displays the HTML written above.
        flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
        flyWindow.document.write(myText)
        }
    // if the email entered does not match the proper email format (regex), an
    // alert pop-up box will inform the user to enter a proper email.
    else {
        window.alert("Enter a valid email.")
    }

    
}


