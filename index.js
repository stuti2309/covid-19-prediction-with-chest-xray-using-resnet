fetch('https://corona.lmao.ninja/v2/countries/India')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("total").innerHTML = data.cases.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
});

function remClass(x, str){
  x.classList.remove("bg-dark");
  x.classList.remove("text-light");
  x.classList.add(str);
}
function adClass(x, str){
  x.classList.remove(str);
  x.classList.add("bg-dark");
  x.classList.add("text-light");

}

