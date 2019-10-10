import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

const Settings = ()=>{
  return<h2>Settings</h2>
}

const Dashboard = (props)=>{
  console.log(props)
  return<h2>Dashboard</h2>
}

const routes = [
  {path:'/settings',component:Settings,fetchInitialData:(id)=>{ }},
  {path:'/dashboard',component:Dashboard,fetchInitialData:(id)=>{}}
];
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/settings'>Settings</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
        <hr/>
        {routes.map((route,index)=>{
          return (<Route 
                    path={route.path} 
                    render={(props)=>{return (<route.component {...props} data='sample data'/>)}} 
                    key={index}
                  />)
        })}
      </div>
    </Router>
  );
}

export default App;
