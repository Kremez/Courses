function getAge(birthDate) {
    birthDate = new Date(birthDate);
    let now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();

    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
}

function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}
