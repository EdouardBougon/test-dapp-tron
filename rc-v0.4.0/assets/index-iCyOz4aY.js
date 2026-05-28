import{i as u,r as b,e as p,u as w,a as v,x as h}from"./index-adVlrIes.js";import{n as l,c as f}from"./if-defined-Cmb72fqy.js";import"./index-eUJLLNbo.js";const g=u`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var s=function(r,o,i,n){var a=arguments.length,e=a<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,o,i,n);else for(var d=r.length-1;d>=0;d--)(c=r[d])&&(e=(a<3?c(e):a>3?c(o,i,e):c(o,i))||e);return a>3&&e&&Object.defineProperty(o,i,e),e};let t=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let o="",i="";switch(this.size){case"lg":o="--wui-border-radius-xs",i="--wui-spacing-1xs";break;case"sm":o="--wui-border-radius-3xs",i="--wui-spacing-xxs";break;default:o="--wui-border-radius-xxs",i="--wui-spacing-2xs";break}return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${i});
    `,h`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t.styles=[b,p,w,g];s([l()],t.prototype,"size",void 0);s([l({type:Boolean})],t.prototype,"disabled",void 0);s([l()],t.prototype,"icon",void 0);s([l()],t.prototype,"iconColor",void 0);t=s([f("wui-icon-link")],t);
