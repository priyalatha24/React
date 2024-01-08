// import logo from './logo.svg';
import './App.css';
import './pages/script';

function App() {

  const submit = () => {
    const latitude = document.getElementById('lat').value;
    const longitude = document.getElementById('long').value;

    fetch(`http://api.geonames.org/countrySubdivisionJSON?lat=${latitude}&lng=${longitude}&username=ranjith`)
      .then(response => response.json())
      .then(result => {
        const innerHtml = `<p>country: ${result.adminName1}</p><p>countryName : ${result.countryName}</p>`;
        
        const resElement = document.getElementById("res");
        resElement.innerHTML = innerHtml;
        resElement.style.display = "block";
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <div class="container">
    <h1>GEO FORM</h1>
    <div class="item">
        <input type="text" placeholder="---Enter latitude---" id="lat"/>
        <input type="text" placeholder="---Enter longitude---" id="long"/>
        <button type="submit" class="login-btn" onclick={submit}>SUBMIT</button>
        <div id="res" style={{display:'none'}}>
             
        </div>
    </div>
</div>
  );
}

export default App;
