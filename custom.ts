enum Choice {
    C,
    D
}

//% weight=100 color=#ff69b4 icon=""
namespace tapis {

    //% block="Bouton %choice ON/OFF"
    export function bouton(choice: Choice): void {

        if (choice == Choice.C) {
            // si bouton C choisi 
            if (pins.digitalReadPin(DigitalPin.P14) == 1) {
                // moteur ON 
                pins.digitalWritePin(DigitalPin.P15, 1)
                pins.digitalWritePin(DigitalPin.P16, 0)
            } else {
                // moteur OFF
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P16, 0)
            }
        }

        if (choice == Choice.D) {
            // si bouton D choisi 
            if (pins.digitalReadPin(DigitalPin.P13) == 1) {
                // moteur ON 
                pins.digitalWritePin(DigitalPin.P15, 1)
                pins.digitalWritePin(DigitalPin.P16, 0)
            } else {
                // moteur OFF
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P16, 0)
            }
        }

    }
}
