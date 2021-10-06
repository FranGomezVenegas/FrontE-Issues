import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import { app } from './elements/platformComponents/Redux/reducers/app_reducers.js';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  state => state,
  devCompose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk)
  )
);
// Redux de la plataforma. Inicio 
  store.addReducers({
    app
  })
  import tabsReducer from './elements/platformComponents/Redux/reducers/tabs_reducers';
      store.addReducers({
      tabs: tabsReducer
    });
  import sopReducer from './elements/platformComponents/Redux/reducers/sop_reducers.js';
    store.addReducers({
    SOPS: sopReducer
  });
  import notificationsReducer from './elements/platformComponents/Redux/reducers/notifications_reducers.js';
    store.addReducers({
    notifications: notificationsReducer
  });  
  import esignReducer from './elements/platformComponents/Redux/reducers/esign-reducers.js';
    store.addReducers({
    esignDialog: esignReducer
  });  
  import confirmUserReducer from './elements/platformComponents/Redux/reducers/confirmuser-reducers.js';
    store.addReducers({
    confirmUserDialog: confirmUserReducer
  }); 
  import incidentsReducer from './elements/platformComponents/Redux/reducers/incidents_reducers';
    store.addReducers({
    incidents: incidentsReducer
  });
  import videoTutorialsReducer from './elements/platformComponents/Redux/reducers/videotutorials_reducers';
    store.addReducers({
    videoTutorials: videoTutorialsReducer
  });
  
  import procedureManagementReducer from './elements/platformComponents/ProceduresManagement/02Redux/procedures_reducers';
      store.addReducers({
        sateliteProcedures: procedureManagementReducer
  });
// Redux de la plataforma. Fin

// Redux de procesos de la instancia. Inicio 
import emDemoAReducer from './elements/processInstanceComponents/em-demo-a/02Redux/em-demo-a_reducers.js';
  store.addReducers({
  emDemoA: emDemoAReducer
});  

import procDeployReducer from './elements/processInstanceComponents/proc-deploy/02Redux/proc-deploy_reducers.js';
  store.addReducers({
  procDeploy: procDeployReducer
});  

import genomaInstancia1Reducer from './elements/processInstanceComponents/genoma-instancia1/02Redux/genoma-instancia1_reducers.js';
  store.addReducers({
  genomaInstancia1: genomaInstancia1Reducer
});  
