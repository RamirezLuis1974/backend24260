const EXPRESS = require("express");
const APP	= express();

app.get('/', (req,res) => {
	res.sent("CaC Deploy");
});


const PORT = process.env.PORT || 3000;
application.listen(PORT, () => console.log(`http://localhost:${PORT}`));
