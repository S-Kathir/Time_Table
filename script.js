window.onload = function() {
    var startInput = prompt("Enter the start time (HH:MM AM/PM):");
    var endInput = prompt("Enter the end time (HH:MM AM/PM):");
    var lunchBreakInput = prompt("Enter the lunch break duration (in minutes):");

    // Convert start and end time to date objects
    var startTime = new Date("2000/01/01 " + startInput);
    var endTime = new Date("2000/01/01 " + endInput);

    // Calculate total study time
    var lunchBreak = parseInt(lunchBreakInput, 10);
    var totalStudyTime = endTime - startTime - (lunchBreak * 60000);

    // Calculate subject duration per session (Pomodoro technique)
    var sessionDuration = Math.floor(totalStudyTime / (4 * 60000));
    var shortBreakDuration = 5;
    var longBreakDuration = 30;

    // Define the tasks (subjects and breaks)
    var tasks = [
        { name: "Math", duration: sessionDuration },
        { name: "Short Break", duration: shortBreakDuration },
        { name: "Science", duration: sessionDuration },
        { name: "Short Break", duration: shortBreakDuration },
        { name: "English", duration: sessionDuration },
        { name: "Short Break", duration: shortBreakDuration },
        { name: "History", duration: sessionDuration },
        { name: "Long Break", duration: longBreakDuration },
        { name: "Geography", duration: sessionDuration }
        // Add more tasks as needed
    ];

    // Get the table element
    var timetableTable = document.querySelector('.timetable table');

    // Generate and display the timetable
    var currentTime = startTime;
    for (var i = 0; i < tasks.length; i++) {
        var row = timetableTable.insertRow(-1);
        var timeCell = row.insertCell(0);
        var taskCell = row.insertCell(1);

        timeCell.innerHTML = formatTime(currentTime);
        taskCell.innerHTML = tasks[i].name;

        currentTime = addMinutes(currentTime, tasks[i].duration);
    }

    // Calculate and display total study time
    var totalStudyHours = Math.floor(totalStudyTime / 3600000);
    var totalStudyMinutes = Math.floor((totalStudyTime % 3600000) / 60000);

    var totalTimeRow = timetableTable.insertRow(-1);
    var totalTimeCell = totalTimeRow.insertCell(0);
    totalTimeCell.colSpan = 2;
    totalTimeCell.innerHTML = "Total Study Time: " + totalStudyHours + " hours " + totalStudyMinutes + " minutes";
};

// Helper functions...

