
	function Validation() {
		var name = document.forms["RegForm"]["name"];
		var mno = document.forms["RegForm"]["mno"];
		var what = document.forms["RegForm"]["sportsbox"];
		var address = document.forms["RegForm"]["namebox"];
        var file= document.forms["RegForm"]["select"];

		if (name.value == "") {
			window.alert("Please enter your name.");
			name.focus();
			return false;
		}

		if (address.value == "") {
			window.alert("Please enter your address.");
			address.focus();
			return false;
		}

		if (mno.value == "") {
			window.alert(
			"Please enter a valid e-mail address.");
			email.focus();
			return false;
		}


		if (what.selectedIndex < 1) {
			alert("Please Select and equipment ");
			what.focus();
			return false;
		}
		return true;
	}

    function fileValidation() {
        var fileInput =document.getElementById('select');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
          
        if (!allowedExtensions.exec(filePath)) {
            alert('File Type Invalid');
            fileInput.value = '';
            return false;
        } 
        else  { }
    }

  