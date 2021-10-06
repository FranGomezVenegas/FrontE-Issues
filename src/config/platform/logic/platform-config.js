export const default_language="en";
export const dbName="labplanet";

export const enableLockSession=false;
export const minsLockSession=0.15;
export const enableLogoutSession=false;
export const minsLogoutSession=10;
export const showTimingInConsole=false;
export const secondsNextTimeChecker=10000;

export const isTabOpenableWhenNotSopCertifiedConst=false;

export function isTabOpenableWhenNotSopCertified(procedureData) {
    //console.log('isTabOpenableWhenNotSopCertified');
    if (procedureData==undefined){return false;}
    var windowOpenableWhenNotSopCertified=procedureData.windowOpenableWhenNotSopCertifiedUserSopCertification;
    if (windowOpenableWhenNotSopCertified==undefined){return false;}
    if ((windowOpenableWhenNotSopCertified.toUpperCase()=="ENABLE") || (windowOpenableWhenNotSopCertified.toUpperCase()=="YES") ){return true;}
    return false;
}

export const appLogOut_logOutMessage={
  "sessionUnlocked":{
    message_en:'Session unlocked with success',
    message_es:'Sesión desbloqueada correctamente',
  },
  "closedSession":{
    "message_en":"Session closed",
    "message_es":"Sesión cerrada",
  },
}
  export const appLogin_authenticationMessage={
    "connectedSuccess_singleRole":{
      "message_en":"Valid user, Starting session ... please wait",
      "message_es":"Usuario válido, iniciando sesión ... por favor espere",
    },
    "connectedSuccess":{
      "message_en":"Valid user, please proceed selecting the role",
      "message_es":"Usuario válido, por favor escoja rol",
    },
    "connectedFails":{
      "message_en":"I guess there is no user with those credentials",
      "message_es":"Me temo que el usuario o la contraseña no son correctos.",    
    }
  }
  