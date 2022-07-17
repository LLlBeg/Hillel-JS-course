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

  function UsersInformation() {
    for (let key of users) {
      let userRow = document.createElement("tr");
      let headingUserId = document.createElement("td");
      headingUserId.innerHTML = `${key.id}`;
      let headingUserFirstName = document.createElement("td");
      headingUserFirstName.innerHTML = `${key.first_name}`;
      let headingUserLastName = document.createElement("td");
      headingUserLastName.innerHTML = `${key.last_name}`;
      let headingUserEmail = document.createElement("td");
      headingUserEmail.innerHTML = `${key.email}`;

      userRow.appendChild(headingUserId);
      userRow.appendChild(headingUserFirstName);
      userRow.appendChild(headingUserLastName);
      userRow.appendChild(headingUserEmail);
      thead.appendChild(userRow);

      userRow.ondblclick = function () {
        alert(`${key.first_name} ${key.last_name}`);
      };

      userRow.className = "boxs";
    }
    changeColor = function () {
      document.querySelectorAll(".boxs").forEach((element) => {
        element.addEventListener("click", function () {
          this.classList.toggle("boxs-active");
        });
      });
    };

    changeColor();
  }
  table.appendChild(thead);
  root.appendChild(table);
  UsersInformation();
}

userHeader();
