export const USER_ALL_SOP = 'USER_ALL_SOP';
export const USER_PENDING_SOP = 'USER_PENDING_SOP';
export const PROCEDURE_SOPS = 'PROCEDURE_SOPS';


export function userAllSop(data) {
//  console.log('userAllSop', data);
    return {
      type: USER_ALL_SOP,
      DATA: data
    }
}
export function userPendingSop(data) {
//    console.log('userPendingSop', data);
    return {
      type: USER_PENDING_SOP,
      DATA: data
    }
}
export function procedureSops(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
      return {
        type: PROCEDURE_SOPS,
        DATA: data
      }
}  
  