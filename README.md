## Тестовое задание

#### Описание проекта

Записная книжка с возможностью добавления/удаления, редактирования и поиска

#### Основные технологии, ссылки на либы

- <https://reactjs.org> - react

- <https://redux-toolkit.js.org> - redux-toolkit

- Инструменты:
  - react-hook-form: <https://react-hook-form.com/>
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

- mock - моковые данные(тестовые)

- core - содержит общие компоненты и файлы

- store - хранилище проекта
- router - связь компонентов страниц с URL
- assets - графика
  - icons - svg as React Component
  - images - любые форматы картинок
- components - глупый компоненты без бизнес логики
- constants - глобальные константы
- containers - компоненты-обертки над ui с добавлением бизнес логики
- enums - глобальные перечисления (словари)
- hooks - кастомные хуки
- modals - общие модальные окна
- pages - Навигационные страниы(Ошибка, регистрация, забыл/новый пароль)
- services - сервисы для общения с бекендом
- theme - цвета, стили
- types - типы используемые в приложении
- utils - функции используемые больше чем в двух модулях(переиспользуемые функции)
