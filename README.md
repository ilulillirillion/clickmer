# Clickmer

## Description
---
A simple Javascript game with Node and Angular.

## Commit journal
---

### Commit 280
#### Test duplicating react renders

A test showing how to duplicate renders on React components (seems very simple).
Also cleaned up some old test logs and updated roadmap.

### Commit 279
#### Update player view on server game tick

Whenever the backend server game ticks, it emits state information to the player clients. On receiving this state information, the client will update any relevant views and then refresh virtual DOM elements with React.

### Commit 278
#### Switch from Angular to React

After reading about React it seemed like a purer solution for just updating view (I want to handle model) than using Angular, so I have gotten a small React class going in the test page showing the player object and name on login.

### Commit 277
#### Fix server responding before finishing player

I took a break from this project while I investigated design in C. While I am still interested in developing in C, I've decided to continue this project in Javascript.

In this commit I fixed an issue where the server would return an promise object instead of the actual player to the client, due to the response being sent before the server had fini
shed creating the player object.
