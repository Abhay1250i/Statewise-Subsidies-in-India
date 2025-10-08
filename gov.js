// Search Function for Subsidies
function searchState() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let states = document.getElementById("subsidyList").getElementsByClassName("state-box");

  for (let i = 0; i < states.length; i++) {
    let stateName = states[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (stateName.includes(input)) {
      states[i].style.display = "";
    } else {
      states[i].style.display = "none";
    }
  }
}
