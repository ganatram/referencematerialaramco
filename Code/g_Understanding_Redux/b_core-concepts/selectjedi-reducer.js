// core-concepts/selectjedi-reducer.js

let actionPerson = { type: "SELECT_JEDI", payload: { id: 1, name: "Luke" } };
let actionVader = { type: "SELECT_JEDI", payload: { id: 2, name: "Vader" } };

function selectJediReducer({}, action) {
  switch (action.type) {
    case "SELECT_JEDI":
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

state = selectJediReducer({}, actionPerson);
console.log(state);
/*
{ id:1,name: 'Luke' }
*/

state1 = selectJediReducer(state, actionVader);
console.log(state1);
/*
{ id:2,name: 'Vader' }
*/

module.exports = selectJediReducer;
