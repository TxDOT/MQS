class Bulk_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticBulk_Modal;
  }
}
customElements.define('bulk_modal-component', Bulk_Modal);

class Bulk_Modal_ReferenceMarker extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticBulk_Modal_ReferenceMarker;
  }
}
customElements.define('bulk_modal_reference_marker-component', Bulk_Modal_ReferenceMarker);

class Bulk_Modal_LatLon extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticBulk_Modal_LatLon;
  }
}
customElements.define('bulk_modal_latlon-component', Bulk_Modal_LatLon);

class Bulk_Modal_ControlSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticBulk_Modal_ControlSection;
  }
}
customElements.define('bulk_modal_controlsection-component', Bulk_Modal_ControlSection);

class Bulk_Modal_DFO extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticBulk_Modal_DFO;
  }
}
customElements.define('bulk_modal_dfo-component', Bulk_Modal_DFO);


class Cursor_Help_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticCursor_Help_Modal;
  }
}
customElements.define('cursor_help_modal-component', Cursor_Help_Modal);

class Form_Help_Modal extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    this.innerHTML = staticForm_Help_Modal;
  }
}
customElements.define('form_help_modal-component', Form_Help_Modal);

class Results_Help_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticResults_Help_Modal;
  }
}
customElements.define('results_help_modal-component', Results_Help_Modal);

class Route_Help_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticRoute_Help_Modal;
  }
}
customElements.define('route_help_modal-component', Route_Help_Modal);

class Route_Style_Help_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticRoute_Style_Help_Modal;
  }
}
customElements.define('route_style_help_modal-component', Route_Style_Help_Modal);

class Map_Controls extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticMap_Controls;
  }
}
customElements.define('map_controls-component', Map_Controls);

class Demo_Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticDemo_Modal;
  }
}
customElements.define('demo_modal-component', Demo_Modal);

class Indicator extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticIndicator;
  }
}
customElements.define('indicator-component', Indicator);

class Nav_Bar extends HTMLElement {
  constructor() {
    super();
    // https://dev.to/zippcodder/a-quick-guide-to-custom-html-elements-5f3b
    // attach shadow DOM to element
    // let shadow = this.attachShadow({mode: "closed"});
  }
  connectedCallback() {
    this.innerHTML = staticNav_Bar;
  }
}
customElements.define('nav_bar-component', Nav_Bar);

class Results_Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticResults_Card;
  }
}
customElements.define('results_card-component', Results_Card);

class Wizard_Form extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticWizard_Form;
  }
}
customElements.define('wizard_form-component', Wizard_Form);

class FileInputForm extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticFileInputForm;
  }
}
customElements.define('file-input-form-component', FileInputForm);

class Download_Bar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = staticDownload_Bar;
  }
}
customElements.define('download_bar-component', Download_Bar);

