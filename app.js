let menuContainer = document.getElementById("menuContainer")
let coffeeList = document.getElementById("coffeeList")
let selectionContainer = document.getElementById("selectionContainer")
let deleteContainer = document.getElementById("deleteContainer")
let deleteBox = document.getElementById("deleteBox")
let deleteButton = document.getElementById("deleteButton")

const NEW_COFFEE_ORDER_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
const COFFEE_BY_EMAIL_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress"

function selectExpresso(){

let item = `
<li>
  <a href="#"><p id="coffeeItem">Espresso - $2.50</p><img src="images/expresso.jpeg" height="100px" width="150px"></a>
  <input type="text" id="emailBox" size="30" placeholder="Please enter your email address"/>
  <button id="orderButton" onclick='placeOrder()'>Order</button>
</li>
`
  selectionContainer.insertAdjacentHTML("beforeend",item)


}

function placeOrder() {

let email = emailBox.value
let coffee = coffeeItem.innerHTML

  fetch(NEW_COFFEE_ORDER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emailAddress: `${email}`,
      coffee: `${coffee}`,
    })
  })
}

function deleteOrderByEmail(){
  let deleteValue = deleteBox.value

    fetch(COFFEE_BY_EMAIL_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailAddress: `${deleteValue}`
      })
    })

}
