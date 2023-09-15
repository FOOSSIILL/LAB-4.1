import * as components from "./components/index"
import Profile, { Attribute } from "./components/profile/profile";
import { data } from "./Data";

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Holisss</h1>`;
            
            data.images.forEach((primerArreglo) => {
                primerArreglo.forEach((segundoArreglo) => {
                    const container2 = this.ownerDocument.createElement('div');
                    segundoArreglo.forEach((tercerArreglo) => {
                        
                        console.log(tercerArreglo);
                        const myPixel = this.ownerDocument.createElement('my-profile');
                        if(tercerArreglo === 0){
                            myPixel.classList.add('white');
                        }else{
                            myPixel.classList.add('black');
                        }
                        container2.appendChild(myPixel);
                    })
                    this.shadowRoot?.appendChild(container2);
                });
            })
        }
    }
}

customElements.define("app-container",AppContainer);