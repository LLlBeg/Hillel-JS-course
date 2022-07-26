const root = document.querySelector("#root");

const table = document.createElement("table");

const thead = document.createElement("thead");

function userHeader() {
  thead.innerHTML = `
                    <tr>
                    <th>Id</th>
                    <th>First_name</th>
                    <th>Last_name</th>
                    <th>email</th>
                    </tr>
                  `;
}

userHeader();

function UsersInformation() {
  for (let user of users) {
    const userRow = document.createElement("tr");
    let headingUserId = document.createElement("td");
    headingUserId.innerHTML = user.id;
    let headingUserFirstName = document.createElement("td");
    headingUserFirstName.innerHTML = user.first_name;
    let headingUserLastName = document.createElement("td");
    headingUserLastName.innerHTML = user.last_name;
    let headingUserEmail = document.createElement("td");
    headingUserEmail.innerHTML = user.email;

    userRow.appendChild(headingUserId);
    userRow.appendChild(headingUserFirstName);
    userRow.appendChild(headingUserLastName);
    userRow.appendChild(headingUserEmail);
    thead.appendChild(userRow);

    userRow.ondblclick = function () {
      alert(user.first_name + " " + user.last_name);
    };

    userRow.className = "boxs";
  }

  function changeColor() {
    document.querySelectorAll(".boxs").forEach((e) => {
      e.addEventListener("click", function () {
        this.classList.toggle("boxs-active");
      });
    });
  }

  changeColor();
}

table.appendChild(thead);
root.appendChild(table);

UsersInformation();
