function isTabOpn(tabsList, tabName){
  var isOpen = tabsList.find(function(curTab) {
    return tabName == curTab.tabName;
  });  
  if (!isOpen) return false;
  return true;
}
export  {isTabOpn};
export const schema_name='genoma-1';
