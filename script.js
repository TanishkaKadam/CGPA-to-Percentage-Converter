function convertCGPA() {

    function convertCGPA() {
      var name = document.getElementById("name_input").value;
      var PRN = document.getElementById("PRN_input").value;
      var cgpa = document.getElementById("cgpa_input").value;
  
      // Check if inputs are empty
      if (name === "") {
          document.getElementById("error_msg").innerHTML = "Enter valid Name";
          return;
      }
      if (PRN === "") {
          document.getElementById("error_msg").innerHTML = "Enter valid PRN";
          return;
      }
      if (cgpa === "") {
          document.getElementById("error_msg").innerHTML = "Enter valid CGPA (between 0 & 10)";
          return;
      }
  
      // Clear any previous error messages
      document.getElementById("error_msg").innerHTML = "";
  
      // Convert CGPA to percentage and calculate grade and class
      // Your existing code for CGPA conversion goes here...
  
      // Update output table with calculated values
      document.getElementById("op_cgpa").innerHTML = cgpa;
      document.getElementById("op_grade").innerHTML = grade;
      document.getElementById("op_per").innerHTML = per;
      document.getElementById("op_class").innerHTML = cls;
  }
  
  document.getElementById("cgpa_input").addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          convertCGPA();
      }
  });
  
    
      // checking empty input field
      var cgpa = document.getElementById("cgpa_input").value;
      if(cgpa == ""){
        document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
        return;
      }
      
      var cgpa = Number(cgpa);
      var grade;
      var per;
      var cls;
      
      // validating range of input CGPA
      if(cgpa < 0 || cgpa > 10){
        document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
        return;
      }
      else{
        document.getElementById("error_msg").innerHTML = "";
      }
      
      // Calculating grade & percentage
      if(cgpa < 4){
        grade = "F";
        per = "NA";
      }
      else if(4.00 < cgpa && cgpa < 4.24){
        grade = "P";
        per = 20*cgpa - 40;
      }
      else if(4.25 < cgpa && cgpa < 5.49){
        grade = "C";
        per = 4*cgpa + 28;
      }
      else if(5.50 < cgpa && cgpa < 6.49){
        grade = "B";
        per = 5*cgpa + 22.5
      }
      else if(6.50< cgpa && cgpa< 7.49){
        grade = "B+";
        per = 5*cgpa + 22.5;
      }
      else if(7.50< cgpa && cgpa< 8.49){
        grade = "A";
        per = 10*cgpa - 15;
      }
      else if(8.50 <cgpa && cgpa< 8.99){
        grade = "A+";
        per = 20*cgpa - 100;
      }
      else{
        grade = "O";
        per = 20*cgpa - 100;
      }
      
      // Calculating class
      if(cgpa < 4)
        cls = "Fail";
      else if(cgpa < 5.5)
        cls = "Pass";
      else if(cgpa < 6.25)
        cls = "Second Class"
      else if(cgpa < 6.75)
        cls = "Higher Second Class";
      else if(cgpa < 7.75)
        cls = "First Class";
      else
        cls = "First Class with Dist";
    
      // Filling the output table
      document.getElementById("op_cgpa").innerHTML = cgpa;
      document.getElementById("op_grade").innerHTML = grade;
      document.getElementById("op_per").innerHTML = per;
      document.getElementById("op_class").innerHTML = cls;
    }
    
    // Click convert button when enter is pressed in input field
    document.getElementById("cgpa_input").addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("convert_btn").click();
      }
    });
    
    function exportTableToExcel(tableID) {
      var name = document.getElementById("name_input").value;
      var PRN = document.getElementById("PRN_input").value;
      var cgpa = document.getElementById("cgpa_input").value;
  
      // Validate inputs
      if (cgpa === "" || isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
          document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
          return;
      }
  
      // Reset error message
      document.getElementById("error_msg").innerHTML = "";
  
      var downloadLink;
      var dataType = 'application/vnd.ms-excel';
      var tableSelect = document.getElementById(tableID);
      var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  
      // Include Name and PRN in the table HTML
      var nameRow = "<tr><td>Name</td><td>" + name + "</td></tr>";
      var PRNRow = "<tr><td>PRN</td><td>" + PRN + "</td></tr>";
      tableHTML = tableHTML.replace("</table>", nameRow + PRNRow + "</table>");
  
      // Specify file name
      var filename = 'cgpa.xls';
  
      // Create download link element
      downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
  
      if (navigator.msSaveOrOpenBlob) {
          var blob = new Blob(['\ufeff', tableHTML], {
              type: dataType
          });
          navigator.msSaveOrOpenBlob(blob, filename);
      } else {
          // Create a link to the file
          downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
  
          // Setting the file name
          downloadLink.download = filename;
  
          //triggering the function
          downloadLink.click();
      }
  }
  
  
  
  
  
  
  
    
  
  // function exportTableToExcel(tableID) {
  //     if (document.getElementById("op_cgpa").innerHTML === '-') {
  //         document.getElementById("error_msg").innerHTML = "Enter valid CGPA (between 0 & 10)";
  //         return;
  //     }
  
  //     // Code for exporting table data to Excel
  // }
  