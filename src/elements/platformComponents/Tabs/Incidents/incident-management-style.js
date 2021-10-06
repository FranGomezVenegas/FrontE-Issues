const documentContainerIncidentManagement = document.createElement('incident-management-style');
documentContainerIncidentManagement.setAttribute('style', 'display: none;');

documentContainerIncidentManagement.innerHTML = `
  <dom-module id="incident-management-style">
    <template>
        <style>
            div.mainDiv{
              display: grid;
              /*flex-direction: row;*/
              /*flex-wrap: wrap;*/
            }
            div.myIncidentsTable{
              display: block;
            }
            div.buttonGroup{
              display: inline-flex;
            }
            div.selectedIncident{
              margin-top:0.2vmax;
              margin-bottom:0.2vmax;
            }
            div.incidentEventCard{
              display:inline-grid;
              background-color: rgba(177, 242, 244, 25%);
              padding: 2px;
              margin 0.4vmax;
              font-size: calc(5px + 1.5vmin);
              box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
              border-radius: 10px;
            }
        </style>
    </template>
  </dom-module>`;
  document.head.appendChild(documentContainerIncidentManagement);      