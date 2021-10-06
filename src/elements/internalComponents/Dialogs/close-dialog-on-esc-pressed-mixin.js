/*
Mixin para permitir detectar pulsaciones de la tecla escape, a fin de cerrar los componentes cuando se pulsa.

Necesita que el componente tenga un método llamado close().

Necesita que el componente tenga una propiedad opened.
*/
export const CloseOnEscPressed = (SuperClass) => class extends SuperClass {

  constructor() {
    super();
    this.closeOnEscHandler = this.escClose.bind(this);
  } 

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.closeOnEscHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.closeOnEscHandler);
  }

  escClose(e) {
    if(e.key === "Escape"){ // && this.opened) {
      //console.log('escClose', this);
      //this.close();  
    }
  }


}