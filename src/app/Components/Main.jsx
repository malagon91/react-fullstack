import React from 'react'
import {Provider} from 'react-redux'
import {store} from "../store";
import {ConnectedDasboard} from "./Dashboard";

export const Main =() => <Provider store={store}>
  <ConnectedDasboard></ConnectedDasboard>
</Provider>