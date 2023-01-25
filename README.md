# Tестовое задание Modsen Themeforest Ensome

## Техническое задание

Необходимо реализовать React приложение "Modsen Themeforest" по предоставленному дизайну из Figma.

#### Необходимый функционал:

Приложение должно предоставлять возможность:

- elastic search

#### Дополнительный функционал

- Развернуть приложение на хостиге (heroky, vercel)

#### Пример графического представления:

Ссылка на макет: [Макет "Modsen Themeforest"](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=236%3A74554>).

#### Также проект предполагает:

- Обязательная валидация всех текстовых полей с использованием _yup_.
- Оптимизация дизайна под мобильные устройства.

#### Описание экранов

1. [Страница About us](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A23264>). Логика блока с отзывами должна быть аналогична той, что и на главной странице. При нажатии на одну из карточек в блоке Why people chosse должен осуществляться переход к [полному описанию сервиса](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Ensome-Modsen-(Community)?node-id=255%3A24521>)
2. [Страница Blog](<https://www.figma.com/file/RH6Tg2icMlc7M2DdHEJ9Bl/Themeforest-Modsen-Template-(Community)?node-id=255%3A24519>). Данная страница состоит из сетки новостей к каждой из которой привязан тег, при нажатии на который должны показываться только новости связанные с этим тегом. При нажатии на More articles список увеличивается на 9 новостей, если новостей больше нет, то кнопка исчезает. При открытии новости в блоке Popular posts отображаются популярные новости по количеству просмотров. В блоке Related Posts отображается 3 самых популярных новости с тем же тегом что и просматриваемая.

Описание табов: выбор иконок для табов остается на усмотрение выполняющего (также можно использовать иконки представленные на дизайне) и представляют из себя следующее (слева на право): Главный экран с кнопкой добавления товара и поделиться товаром, профиль пользователя, список пользователя

## Используемые технологии

- **_yarn_** - менеджер пакетов.
- **_TS_** - инструмент строгой типизации
- **_react-router-dom_** - инструмент управления состоянием.
- **_email-js_** - библиотека позваляющая отправлять электонные письма на почту
- **_styled-components_** - система стилизации react компонентов.
- **_cypress_** - e2e тестирование для React приложений.
- **_yup_** - библиотека для валидации форм
