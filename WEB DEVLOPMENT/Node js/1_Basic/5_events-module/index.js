const EventEmitter = require("node:events")
const { emit } = require("node:process")

const emitter = new EventEmitter()


emitter.on("order-pizza", () => {
    console.log("order recived")
})

emitter.emit("order-pizza")