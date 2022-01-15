	function jsFunction(str){
		str = str.toUpperCase();
	if (str.length == 0) {
    cleardata();
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
	  if(((this.responseText).length)==5){
		  console.log(this.responseText);
		cleardata();
		  
	}else{

		document.getElementById("ID #").value = str.trim();
		document.getElementById("Staff First Name").value = (this.responseText).split("|")[0];
		document.getElementById("Staff First Name Lable").innerHTML  = (this.responseText).split("|")[0];
		document.getElementById("Staff Last Name").value = (this.responseText).split("|")[1];
		document.getElementById("Staff Last Name Lable").innerHTML  = (this.responseText).split("|")[1];
		document.getElementById("Manager/Supervisor").value = (this.responseText).split("|")[4];
		document.getElementById("Manager/Supervisor Lable").innerHTML  = (this.responseText).split("|")[4];	
		document.getElementById("Deaprtment / Team").value = (this.responseText).split("|")[5];
		document.getElementById("Deaprtment /  Lable").innerHTML  = (this.responseText).split("|")[5];
		document.getElementById("Focus Metric").value = (this.responseText).split("|")[6];
		document.getElementById("Focus Metric Lable").innerHTML  = (this.responseText).split("|")[6];	
		document.getElementById("Company").value = ((this.responseText).split("|")[7]);
		document.getElementById("Email").value = (this.responseText).split("|")[2];
		document.getElementById("Results Cycle End Date").value = (this.responseText).split("|")[3];
		document.getElementById("endof13weeks").innerHTML = (this.responseText).split("|")[3];
		var d = new Date();
		document.getElementById("Time Stamp").value = d.getDate() + "/" + d.getMonth()+ "/" + d.getFullYear() + " " + d.getHours() + ":"+ d.getMinutes()+ ":"+ d.getSeconds();

		if((((this.responseText).split("|")[8]).trim()).length>0){
		document.getElementById("G1label").innerHTML = (this.responseText).split("|")[8];
		document.getElementById("Goal 1").value = (this.responseText).split("|")[8];
		document.getElementById("G1 Due Date").value = (this.responseText).split("|")[9];		
		document.getElementById("goal1div").style.display = "block";
		}
		if((((this.responseText).split("|")[10]).trim()).length>0){
		document.getElementById("G1labe2").innerHTML = (this.responseText).split("|")[10];
		document.getElementById("Goal 2").value = (this.responseText).split("|")[10];
		document.getElementById("G2 Due Date").value = (this.responseText).split("|")[11];		
		document.getElementById("goal2div").style.display = "block";
		}
		
		document.getElementById("Core KPI").focus();
	  }
	  }
    };
    xmlhttp.open("GET", "index1.php?ID=" + str, true);
    xmlhttp.send();
  }
  }	

function cleardata(){
		alert("Please enter a valid ID");	
		document.getElementById("ID #").value = "";
		document.getElementById("ID #").focus();
		document.getElementById("Staff First Name").value = "";
		document.getElementById("Staff First Name Lable").innerHTML  = "";
		document.getElementById("Staff Last Name").value = "";
		document.getElementById("Staff Last Name Lable").innerHTML  = "";	
		document.getElementById("Manager/Supervisor").value = "";
		document.getElementById("Manager/Supervisor Lable").innerHTML  = "";		
		document.getElementById("Deaprtment / Team").value = "";
		document.getElementById("Deaprtment /  Lable").innerHTML  = "";
		document.getElementById("Focus Metric").value = "";
		document.getElementById("Focus Metric Lable").innerHTML  = "";
		document.getElementById("Time Stamp").value = "";
		
		document.getElementById("G1label").innerHTML = ""
		document.getElementById("Goal 1").value = ""	
		document.getElementById("goal1div").style.display="none";
		
		document.getElementById("G1labe2").innerHTML = ""
		document.getElementById("Goal 2").value = ""
		document.getElementById("goal2div").style.display="none";
		
}		
		
		
	
//Posting values to form	
	  const scriptURL = "https://script.google.com/macros/s/AKfycbxRZ5hm-TRdr0GZt5Cst72Qx6SWF6JixssOlRzUFdNlieCwTqII47GDnylm8D2MZZ6-/exec"
	  const form = document.forms['google-sheet']
	
	   function test(){
	   //document.getElementById("alert").innerHTML  = "Form submitted successfully";
	   window.location.replace("https://apps.trendwelldata.com/10x/FCHA/Thank-You.html");
	   }
          
      form.addEventListener('submit', e => {
      e.preventDefault()
	  document.getElementById("submit").value  = "Please wait..";
	  document.getElementById("submit").disabled = true;
	  
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => test())
            .catch(error => console.error('Error!', error.message))
      })