export const getRandomUsername = () => {
    const getRandomIndex = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }
    const names = ['Опасный', 'Случайный', 'Неинтересный', 'Противоречивый', 'Виртуозный']
    const seconds = ['Нападающий', 'Сникерс', 'Полупокер', 'Фуллоффсайдер', 'Разработчик']

    return `${names[getRandomIndex(names)]} ${seconds[getRandomIndex(seconds)]}`
}