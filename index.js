/* Your Code Here */

// // Solution 1
let createEmployeeRecord = function(employee){
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  // Solution 2
  function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord)
  }
  
  // Solution 3
  const getHour = function(dateTime){
    return parseInt(dateTime.match(/\d{4}$/)[0]) // returns the last two digits
  }
  
  // Solution 4
  const getDate = function(dateTime){
    return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0] // returns the date
  }
  
  // Solution 5
  function createTimeInEvent(timeIn){
    this.timeInEvents.push({
      type: "TimeIn",
      date: getDate(timeIn),
      hour: getHour(timeIn)
    })
    return this
  }
  
  // Solution 6
  function createTimeOutEvent(timeOut){
    this.timeOutEvents.push({
      type: "TimeOut",
      date: getDate(timeOut),
      hour: getHour(timeOut)
    })
    return this
  }
  
  // Solution 7
  function hoursWorkedOnDate(dateOne){
    let timeIn = this.timeInEvents.find(function(event){
      return event.date === dateOne
    })
    let timeOut = this.timeOutEvents.find(function(event){
      return event.date === dateOne
    })
    let totalTime = (timeOut.hour - timeIn.hour) / 100
    return totalTime
  }
  
  // Solution 8
  function wagesEarnedOnDate(dateOne){
    let hours = hoursWorkedOnDate.call(this, dateOne)
    return this.payPerHour * hours
  }
  
  // Solution 9
  function findEmployeeByFirstName(array, name){
    return array.find(function(employee){
      return employee.firstName === name
    })
  }
  
  // Solution 10
  function calculatePayroll(employeeRecord){
    return employeeRecord.reduce((total, employee) => {
        return total + allWagesFor.call(employee)
    }, 0)
  }
  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

