let amountBatteries = parseFloat(prompt('enter amount batteries', ''));
amountBatteries = parseFloat(amountBatteries.toFixed(2));

let defectiveBatteries = parseFloat(prompt('enter defective batteries', ''));
defectiveBatteries = parseFloat(defectiveBatteries.toFixed(2));

if (amountBatteries < 0) {
    alert('Invalid input data');
} else if (defectiveBatteries >= 0 || defectiveBatteries <= 100) {
    let amountOfDefectiveBatteries = amountBatteries * defectiveBatteries / 100;
    amountOfDefectiveBatteries = parseFloat(amountOfDefectiveBatteries.toFixed(2));
    let amountOfWorkingBatteries = amountBatteries - amountOfDefectiveBatteries;
    amountOfWorkingBatteries = parseFloat(amountOfWorkingBatteries.toFixed(2));

    alert('Amount of batteries:' + amountBatteries + '\n' + 'Defective rate:' +
        defectiveBatteries + '%' + '\n' + 'Amount of defective batteries:' +
        amountOfDefectiveBatteries + '\n' + 'Amount of working batteries:' + amountOfWorkingBatteries);
} else {
    alert('Invalid input data');
}

