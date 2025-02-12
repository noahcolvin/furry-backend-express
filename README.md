# Furry Backend - Express
This is a sample backend for a mobile app named `Furry`, a sample mobile app for a pet store.

## Features
This has three endpoints:
- `/items`: Get a list of store items
  - By default returns all items
  - `?animal={animal}`: Filter by animal type
  - `?product={product}`: Filter by product type
  - `?search={search}`: Search for items
- `/my-favorite-items`: Get a list of your favorite items
- `/my-friends`: Gets a list of your friends

## How to run
Install [Nodejs](https://nodejs.org/en/) on your platform of choice.

#### Create `.env` file
`.env`: This holds the base URL for the file storage and the port for the server
```
PORT=3000
STORAGE_URL=http://{projectId}.supabase.co/storage/v1/object/public
```

Start the local service:
```bash
npm install
npm run dev
```

## Running Tests

```bash
npm test
```

## Questions
#### What is the purpose of this project?
I created this project to demonstrate a simple backend for a mobile app.

Here are some others that do more or less the same thing:

- [furry-backend - TypeScript/Deno/Supabase](https://github.com/noahcolvin/furry-backend)
- [furry-backend-dotnet - .NET Core](https://github.com/noahcolvin/furry-backend-dotnet)

#### The controllers are very simple, why don't they do more?
Yes, they only GET a few pieces of data. The sample mobile app is not complete and only displays data. If the modile app ever does more, the backend can be expanded to include the rest of the CRUD operations.

Sometimes simple is all you need, and for this, it is fine.

#### Why is the data hard-coded?
Just to keep it simple. In a real application, this data would be stored in a real database. You'd also need a way to add, update, and delete data.

#### Why is there no authentication?
No need for the current app.

#### Code X is bad, why didn't you do Y?
This is just a sample exercise and was completed in about a day. I'm sure there are many improvements that could be made. Fell free to make an issue or PR if you have a suggestion. This doesn't need to be perfect but I am certainly open to feedback. I may add to it in the future.