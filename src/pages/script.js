function submit(){
    let lat=document.getElementById("lat").value
    let long=document.getElementById("long").value

    fetch(`http://api.geonames.org/countrySubdivisionJSON?lat=${lat}&lng=${long}&username=ranjith`, { method: 'GET' })


    .then(response=>response.text())
    .then(result=>{
        result =JSON.parse(result);
        let innerhtml=`<p>country: ${result.adminName1}</p><p>countryName : ${result.countryName}</p>`
        
            document.getElementById("res").innerHTML=innerhtml
            document.getElementById("res").style.display = "block";  // <-- Set it to block
            console.log(result)
    })
    .catch(error=>console.log('error',error));
}
export default submit;