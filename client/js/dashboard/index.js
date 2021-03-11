import api from './api'
import dataFetcher from '../utils/dataFetcher'
import EventManager from './events/EventManager'
import SideBar from './sidebar';
import DisplayPanel from './display-panel'

 
const displayPanel = DisplayPanel();
const sideBar = SideBar()
const eventManager = EventManager.getInstance();




eventManager.handle.addEventListener('updateDisplay', (e)=>{
    // update display Snippet #1
})



 

const appInit = async function (){
       const departmentData = await dataFetcher.getRequest(api.getAllDepartments)
       const defaultWidgitData = await dataFetcher.getRequest(api.getDepartment("training"))
       sideBar.init(departmentData)
       displayPanel.init(defaultWidgitData)
}

appInit()
 


 
 