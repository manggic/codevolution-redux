const redux = require("redux");

const createStore = redux.createStore;

const combineReducers = redux.combineReducers

// action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "action for buying cake",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "action for buying ice-cream",
  };
}

const cakeInitialState = {
  noOfCakes: 10,
};

const icecreamInitialState = {
  noOfIcecream: 20,
};

function cakeReducer(prevState = cakeInitialState, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...cakeInitialState,
        noOfCakes: prevState.noOfCakes - 1,
      };
    }
    default:
      return prevState;
  }
}

function icecreamReducer(prevState = icecreamInitialState, action) {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...icecreamInitialState,
        noOfIcecream: prevState.noOfIcecream - 1,
      };
    }
    default:
      return prevState;
  }
}


const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducers);

console.log("get the state value ", store.getState());
const unsubscriber = store.subscribe(function () {
  console.log("updated state value", store.getState());
});
store.dispatch(buyCake());

unsubscriber();

store.dispatch(buyCake());





