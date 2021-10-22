class Tabla {
    totalRobot = 0;
    socketsConnected=[];
    bridgeSockets=[];
}

let tabla = new Tabla();

tabla.bridgeSockets.push({
            socketMain:1,
            socketWorker:2
});

console.log(tabla);