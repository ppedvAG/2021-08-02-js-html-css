const inpOkBtn = document.getElementById('okBtn');

// Problem bei FctVariablen, sie müssen erstmal deklariert werden und dann dürfen sie genutzt werden.
// Bei klassischen Funktionen kann Deklaration nach dem Aufruf stehen.
okHandler = () => {
    const parGreeter = document.getElementById('pGreeter');
    const inpName = document.getElementById('inpName');
    parGreeter.textContent = 'Hallo ' + inpName.value
}

// Option 1
// mit addEventListener kann man mehrere Handler nach und nach hinzufügen
inpOkBtn.addEventListener('click', okHandler);

// Option 2
// inpOkBtn.onclick=okHandler;