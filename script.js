
function addStudent() {
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);
    var image = document.getElementById("image").files[0];
    var website = document.getElementById("website").value;

     
    var table = document.getElementById("table");
    var newRow = table.insertRow(table.rows.length);
    var descriptionCell = newRow.insertCell(0);
    var imageCell = newRow.insertCell(1);

   
    descriptionCell.innerHTML = `Name: ${name}<br>Email: ${email}<br>Gender: ${gender}<br>Skills: ${skills.join(", ")}<br>Website: <a href="${website}" target="_blank">${website}</a>`;

    var img = document.createElement("img");
    img.src = URL.createObjectURL(image);
    img.classList.add("student-image");
    img.style.maxWidth = "100px";
    img.style.maxHeight = "100px";
    imageCell.appendChild(img);

     
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.style.display = "block";  
    deleteButton.style.margin = "35px";  
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };
    newRow.appendChild(deleteButton);
        
    document.getElementById("registrationForm").reset();

    }
