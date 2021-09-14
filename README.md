# Mail Sender Starter Pack

This Starter Pack uses ES6 import/export syntax instead of const and require. Something which all of you are familiar with.

## List of Packages used:

- next
- typescript
- react and @types/react
- react-dom
- dotenv: to access .env files in the app
- axios: For making api requests
- @sendrid/mail: For sending emails

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file. Create a .env file in root of the project.

`Sendgrid_API`: "YourSendgridApi"

## Installation

Install this starter pack with yarn (recommended) However you can use npm if you wish.

```
git clone https://github.com/SAYUK09/mail-sender-starter
cd mail-sender
yarn
```

## Feature

- ES6 syntax
- Features you will build

## API Reference

Routes located at `/pages/api`

API Request for send mails:

```
api/sendmails
```

| parameter      | type   | description  |
| -------------- | ------ | ------------ |
| `emailAddress` | string | **required** |

<hr>
Ping me if you have any other Scenarios. Feel free to make any changes to how functions are declared/structured etc or use syntax you are familiar with.
