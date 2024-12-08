function registerevent() {
  let donor = {
    district: document.getElementById('district').value,
    bloodgroup: document.getElementById('bloodgroup').value,
    names: document.getElementById('name').value,
    contact: document.getElementById('contact').value,
    whatsapp: document.getElementById('whatsapp').value,
    pincode: document.getElementById('pincode').value
 
  }
  
  let donors = JSON.parse(localStorage.getItem("donors"))||[];
    donors.push(donor)
 localStorage.setItem("donors",JSON.stringify(donors));
  
  localStorage.setItem("recentdonor", JSON.stringify(donor));


   window.location.href = "success.html"
  
  document.getElementById('register-form').reset();
}

function finddonor(){
  let searchdistrict = document.getElementById('searchdistrict').value
  let searchbloodgroup = document.getElementById('searchbg').value
  let searchpincode = document.getElementById('searchpincode').value
  
  
  let donors =JSON.parse(localStorage.getItem("donors"))||[];
  
  let filterddonors = donors.filter(
    donor=>
    donor.district === searchdistrict &&
    donor.bloodgroup === searchbloodgroup&&
    donor.pincode=== searchpincode
    );
    localStorage.setItem("filterddonors",JSON.stringify(filterddonors))
    window.location.href="result.html";
    
      }
