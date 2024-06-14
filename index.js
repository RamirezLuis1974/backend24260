const EXPRESS = require("express");
const APP	= EXPRESS();

APP.get('/', (req,res) => {
	res.send('CaC Deploy');
});


const PORT = process.env.PORT || 3000; // El process.env consulta al servidor que puestos va a utilizar.
APP.listen(PORT, () => console.log(`http://localhost:${PORT}`));
