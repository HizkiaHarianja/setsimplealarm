function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    const message = document.getElementById('message');

    if (!alarmTime) {
        message.textContent = "Please set a valid time for the alarm.";
        return;
    }

    const alarmDate = new Date();
    const [hours, minutes] = alarmTime.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const now = new Date();
    if (alarmDate < now) {
        message.textContent = "Alarm time must be in the future.";
        return;
    }

    message.textContent = `Alarm set for ${alarmTime}.`;

    const alarmSound = document.getElementById('alarm-sound');

    const timeDifference = alarmDate.getTime() - now.getTime();

    setTimeout(() => {
        alarmSound.play();
        message.textContent = "Wake up! It's time!";
    }, timeDifference);
}
