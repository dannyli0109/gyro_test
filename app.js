gyro.startTracking(function(o) {
    // o.x, o.y, o.z for accelerometer
    // o.alpha, o.beta, o.gamma for gyro
    // console.log(o.x, o.y, o.z, o.alpha, o.beta, o.gamma)
    document.querySelector('body').innerHTML = "Accelerometer x: " + o.x + " y: " + o.y + " z: " + o.z + " | gyro: alpha: " + o.alpha + " beta: " + o.beta + " gamma: " + o.gamma
});