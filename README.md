## Тестовое задание

#### Описание проекта

Записная книжка с возможностью добавления/удаления, редактирования и поиска

#### Основные технологии, ссылки на либы

- <https://reactjs.org> - react

- <https://redux-toolkit.js.org> - redux-toolkit

- Инструменты:
  - react-bootstrap: <https://react-bootstrap.github.io/>

#### Инициализация проекта

    npm install

#### Запуск json-server

    json-server db.json -m ./node_modules/json-server-auth

#### Запуск development сервера

    npm run dev

#### Сборка приложения

    npm run build

#### Структура проекта

- app
  - store - хранилище проекта
  - fetching - запрос контактов из бд
  - querys - запросы для работы с данными
- mock - моковые данные(тестовые логины и пароли)
- routes
  - Contact
  - Login
  - Not Found (404)
- components - основные компоненты
