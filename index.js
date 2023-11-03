let m = document.getElementById("meters-to-feet1")
let mtf = document.getElementById("meters-to-feet2")

let f = document.getElementById("feet-to-meters1")
let ftm = document.getElementById("feet-to-meters2")

let p = document.getElementById("pounds-to-kilograms1")
let ptk = document.getElementById("pounds-to-kilograms2")

let k = document.getElementById("kilograms-to-pounds1")
let ktp = document.getElementById("kilograms-to-pounds2")

let l = document.getElementById("liters-to-gallons1")
let ltg = document.getElementById("liters-to-gallons2")

let g = document.getElementById("gallons-to-liters1")
let gtl = document.getElementById("gallons-to-liters2")

let input = document.getElementById("inputNumbers")

let upozorenje = document.getElementById("upozorenje")

// ...

input.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim();

    if (/^\d+$/.test(inputValue)) {
      upozorenje.innerHTML = "";
      m.textContent = inputValue;
      mtf.textContent = (Math.round(inputValue * 100) / 100 * 3.28084).toFixed(2);
  
      f.textContent = (Math.round(inputValue * 100) / 100 * 0.3048).toFixed(2);
      ftm.textContent = inputValue;
  
      p.textContent = (Math.round(inputValue * 100) / 100 * 0.453592).toFixed(2);
      ptk.textContent = inputValue;
  
      k.textContent = inputValue;
      ktp.textContent = (Math.round(inputValue * 100) / 100 * 2.20462).toFixed(2);
  
      l.textContent = inputValue;
      ltg.textContent = (Math.round(inputValue * 100) / 100 * 0.264172).toFixed(2);
  
      g.textContent = (Math.round(inputValue * 100) / 100 * 3.78541).toFixed(2);
      gtl.textContent = inputValue;
    } else {
      upozorenje.textContent = "niste upisali broj";
    }
  });
  

//pounds-to-kilograms1 gallons-to-liters1 feet-to-meters1