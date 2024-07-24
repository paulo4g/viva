import app from "./src/backend/app.js";

const PORT = 3030

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta: ${PORT}`);
})