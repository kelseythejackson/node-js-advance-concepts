// node myfile.js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New timers, task, operation are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in on 'tick'
while(shouldContinue()) {
    
}




// exit back to terminal