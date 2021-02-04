const fs = require('fs');
const path = require('path');

// File system, модуль для роботи з різними файлами

// Для створенння нової директорії
/*
fs.mkdir(path.join(__dirname, 'notes'), (error) => {
    // if (error) throw new Error(error)
    if (error) throw error

    console.log('папка була створена');
});
*/

// Для створення нового файлу
/*
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello World',
    (err) => {
        if (err) throw err;
        console.log('файл створено')

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            '  From append file',
            err => {
                if (err) throw err;
                console.log('файл було змінено')
            }
        )
    }
)
*/

// fs.appendFile = використовується для додавання нового контенту в існуючий файл
// fs.writeFile = для створення нового файлу
// приймають три параметри: шлях, дані, callback функцію


// Для зчитування з файла використовується fs.readFile
/*
fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err;
        console.log('data => ', data);
        // console.log('data => ', Buffer.from(data).toString());
    }
)
*/

// Для перейменування файла
fs.rename(
    path.join(__dirname, 'notes', 'note.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err;
        console.log('file is renamed')
    }
)