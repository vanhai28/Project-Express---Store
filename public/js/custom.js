function subscribe(event) {
  event.preventDefault();
  let emailInput = document.getElementById("follow_email");
  let email = emailInput.value;

  let request = new XMLHttpRequest();

  if (!emailInput.value) {
    return;
  }

  request.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      emailInput.value = "";
      showAutoClosedAlert("#message_alert", this.responseText);
    } else if (this.readyState == 4) {
      emailInput.value = "";
      showAutoClosedAlert("#message_alert", this.responseText);
    }
  };

  request.open("POST", "/user/api/add/follower?email_follower=" + email, true);
  request.send();
}

function showAutoClosedAlert(alertItem, message) {
  $(alertItem).html(message);
  $(alertItem)
    .fadeTo(3000, 500)
    .slideUp(500, function () {
      $(alertItem).slideUp(500);
    });
}
