const timer1 = new CountdownTimer({
    selector: '#Lit1', 
    targetDate: new Date('May, 12 2027, 09:00:00')
})

const timer2 = new CountdownTimer({
    selector: '#Lit2', 
    targetDate: new Date('May, 19 2027, 09:00:00')
})

timer1.startTimer()
timer2.startTimer()

