const inpOkBtn = document.getElementById('okBtn');

// Problem bei FctVariablen, sie müssen erstmal deklariert werden und dann dürfen sie genutzt werden.
// Bei klassischen Funktionen kann Deklaration nach dem Aufruf stehen.
okHandler = () => {
    const outputGreeter = document.getElementById('outpGreeter');
    const inpName = document.getElementById('inpName');
    if(inpName.value == '') {
        // Bei Output kann sowohl 'value' als auch 'textContent' genutzt werden. 
        // outputGreeter.textContent = 'Sie haben nichts eingegeben.'
        outputGreeter.value = 'Sie haben nichts eingegeben.'
        // value und textContent sind synchronisiert
        console.log('outputGreeter.textContent :>> ', outputGreeter.textContent);
    } else {
        outputGreeter.textContent = 'Hallo ' + inpName.value;
    }
}

// Option 1
// mit addEventListener kann man mehrere Handler nach und nach hinzufügen
inpOkBtn.addEventListener('click', okHandler);

// Option 2
// inpOkBtn.onclick=okHandler;