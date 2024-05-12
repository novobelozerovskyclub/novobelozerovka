// JavaScript-код для выделения текущего дня недели на графике режима работы
function highlightCurrentDay() {
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // массив с классами для каждого дня недели
    const now = new Date();
    const currentDayIndex = now.getDay() - 1; // получаем индекс текущего дня недели (0 - понедельник, 1 - вторник, и т.д.)

    if (currentDayIndex >= 0 && currentDayIndex < daysOfWeek.length) {
        const currentDayClass = daysOfWeek[currentDayIndex];
        const currentDayElement = document.getElementsByClassName(currentDayClass)[0]; // получаем элемент текущего дня недели
        if (currentDayElement) {
            currentDayElement.classList.add('highlight'); // добавляем класс highlight для выделения текущего дня
        }
    }
}

// вызываем функцию для выделения текущего дня недели при загрузке страницы
highlightCurrentDay();


// Функция для проверки, виден ли элемент на экране
function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

