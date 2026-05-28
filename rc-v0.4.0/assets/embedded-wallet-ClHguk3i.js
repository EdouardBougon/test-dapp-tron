import{i as y,a as g,M as N,O as W,x as l,o as P,T as _,K as j,m as A,r as k,c as C,L as m,A as I,h as U,d as v,g as x,f as $,W as R,S as F,R as H}from"./index-adVlrIes.js";import{r as p,c as w,n as h,o as K}from"./if-defined-Cmb72fqy.js";import{H as T,N as V}from"./HelpersUtil-CErRmUJs.js";import{e as z,n as G}from"./ref-BJeLPsaB.js";import"./index-CQHTtCh6.js";import"./index-DgC6Oajv.js";import"./index-eUJLLNbo.js";import"./index-iCyOz4aY.js";import"./index-00fttz7z.js";import"./index-BIeXuXGt.js";import"./index-V0KzHEGK.js";import"./index-aUwaoTJO.js";import"./index-2lP68Uvx.js";const L=y`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var M=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const S=600,O=360,Y=64;let b=class extends g{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(N.subscribeKey("open",e=>{e||this.onHideIframe()}),N.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){var t;await this.syncTheme(),this.iframe.style.display="block";const e=(t=this==null?void 0:this.renderRoot)==null?void 0:t.querySelector("div");this.bodyObserver=new ResizeObserver(n=>{var s,r;const o=(s=n==null?void 0:n[0])==null?void 0:s.contentBoxSize,i=(r=o==null?void 0:o[0])==null?void 0:r.inlineSize;this.iframe.style.height=`${S}px`,e.style.height=`${S}px`,W.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${O}px`,this.iframe.style.left=`calc(50% - ${O/2}px)`,this.iframe.style.top=`calc(50% - ${S/2}px + ${Y/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=P.getAuthConnector();if(e){const t=_.getSnapshot().themeMode,n=_.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:j(n,t)})}}async updateFrameSizeForEmbeddedMode(){var n;const e=(n=this==null?void 0:this.renderRoot)==null?void 0:n.querySelector("div");await new Promise(o=>{setTimeout(o,300)});const t=this.getBoundingClientRect();e.style.width="100%",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};b.styles=L;M([p()],b.prototype,"ready",void 0);b=M([w("w3m-approve-transaction-view")],b);var B=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let D=class extends g{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${A.SECURE_SITE_DASHBOARD}
          imageSrc=${A.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};D=B([w("w3m-upgrade-wallet-view")],D);const q=y`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var f=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let c=class extends g{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${K(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${C.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};c.styles=[k,q];f([h()],c.prototype,"errorMessage",void 0);f([h({type:Boolean})],c.prototype,"disabled",void 0);f([h()],c.prototype,"value",void 0);f([h({type:Boolean})],c.prototype,"loading",void 0);f([h({attribute:!1})],c.prototype,"onKeyDown",void 0);c=f([w("wui-ens-input")],c);const X=y`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    padding: var(--wui-spacing-m);
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    outline: 1px solid var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggestion:hover:not(:disabled) {
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 26px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var d=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let u=class extends g{constructor(){super(),this.formRef=z(),this.usubscribe=[],this.name="",this.error="",this.loading=m.state.loading,this.suggestions=m.state.suggestions,this.profileName=I.state.profileName,this.onDebouncedNameInputChange=U.debounce(e=>{e.length<4?this.error="Name must be at least 4 characters long":T.isValidReownName(e)?(this.error="",m.getSuggestions(e)):this.error="The value is not a valid username"}),this.usubscribe.push(m.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),I.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),(e=this.formRef.value)==null||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${G(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find(n=>{var o,i;return((i=(o=n.name)==null?void 0:o.split("."))==null?void 0:i[0])===this.name&&n.registered});if(this.loading)return l`<wui-loading-spinner
        class="input-loading-spinner"
        color="fg-200"
      ></wui-loading-spinner>`;const t=`${this.name}${C.WC_NAME_SUFFIX}`;return l`
      <wui-icon-link
        .disabled=${e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"fg-200":"accent-100"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=T.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){e.key.length===1&&!T.isValidReownName(e.key)&&e.preventDefault()}nameSuggestionTagTemplate(e){return this.loading?l`<wui-loading-spinner color="fg-200"></wui-loading-spinner>`:e.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      ${this.suggestions.map(e=>l`<button
            .disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            class="suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          >
            <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
              ${e.name}</wui-text
            >${this.nameSuggestionTagTemplate(e)}
          </button>`)}
    </wui-flex>`}isAllowedToSubmit(e){var o;const t=(o=e.split("."))==null?void 0:o[0],n=this.suggestions.find(i=>{var s,r;return((r=(s=i.name)==null?void 0:s.split("."))==null?void 0:r[0])===t&&i.registered});return!this.loading&&!this.error&&!this.profileName&&t&&m.validateName(t)&&!n}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;v.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await m.registerName(e),v.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){F.showError(t.message),v.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:(t==null?void 0:t.message)||"Unknown error"}})}}onEnterKey(e){if(e.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){const t=`${this.name}${C.WC_NAME_SUFFIX}`;this.onSubmitName(t)}}};u.styles=X;d([h()],u.prototype,"errorMessage",void 0);d([p()],u.prototype,"name",void 0);d([p()],u.prototype,"error",void 0);d([p()],u.prototype,"loading",void 0);d([p()],u.prototype,"suggestions",void 0);d([p()],u.prototype,"profileName",void 0);u=d([w("w3m-register-account-name-view")],u);const Q=y`
  .continue-button-container {
    width: 100%;
  }
`;var J=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let E=class extends g{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{U.openHref(V.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){H.replace("Account")}};E.styles=Q;E=J([w("w3m-register-account-name-success-view")],E);export{b as W3mApproveTransactionView,E as W3mRegisterAccountNameSuccess,u as W3mRegisterAccountNameView,D as W3mUpgradeWalletView};
