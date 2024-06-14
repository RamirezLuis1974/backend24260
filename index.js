const EXPRESS = require("express");
const APP	= EXPRESS();

APP.get('/', (req,res) => {
	res.send('CaC Deploy');
});


const PORT = 3000;
APP.listen(PORT, () => console.log(`http://localhost:${PORT}`));
