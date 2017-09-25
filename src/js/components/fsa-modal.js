(function() {

    // CONSTRUCTOR
    this.Modal = function(){

      this.modal = null;
      this.openButton = null;
      this.closeButton = null;
      this.overlay = null;

      var defaults = {
        modalClassName: 'fsa-modal__close',
        contentClassName: 'fsa-modal__content',
        overlayID: 'FSA-OVERLAY-ID',
        closeOutside: true,
        triggerClassName: 'fsa-modal-trigger',
        dataAttributeName: 'data-target',
        contentID: 'CONTENT-ID',
      };

      // Extend defaults to supplied options object
      if (arguments[0] && typeof arguments[0] == "object"){
        this.options = extendsDefaults(defaults, arguments[0]);
      }

      // Find modal based on Unique ID
      this.modal = document.getElementById( this.options.contentID );

      // Assign close button within modal
      this.closeButton = this.modal.getElementsByClassName(this.options.modalClassName)[0];

      // Build selector String
      var selectorString = createSelectorString(
        this.options.triggerClassName,
        this.options.dataAttributeName,
        this.options.contentID
      );

      // Find button trigger based on Unique ID
      this.openButton = document.querySelector( selectorString );

      // Assign event listeners and bind to method
      this.openButton.addEventListener('click', this.open.bind(this));
      this.closeButton.addEventListener('click', this.close.bind(this));

      if(this.options.closeOutside){
        // prevent parent click propagation
        this.modalContent = this.modal.getElementsByClassName(this.options.contentClassName)[0];
        this.modalContent.addEventListener('click',function(e){
          e.stopPropagation();
        });
        // enable outside modal closing
        this.overlay = document.getElementById( this.options.overlayID );
        this.overlay.addEventListener('click', this.close.bind(this));
      }


    }

    // PUBLIC METHODS

    Modal.prototype.open = function(e){

      this.modal.className = this.modal.className + ' fsa-modal--active';
      this.modal.setAttribute('aria-hidden', 'false');

      e.preventDefault();
      e.stopPropagation();
    }

    Modal.prototype.close = function(e){

      this.modal.className = this.modal.className.replace(' fsa-modal--active','');
      this.modal.setAttribute('aria-hidden', 'true');

      e.preventDefault();
      e.stopPropagation();
    }


    // PRIVATE METHODS
    function extendsDefaults(source, properties){
      var property;
      for(property in properties){
        if(properties.hasOwnProperty(property)){
          source[property] = properties[property];
        }
      }
      return source;
    }

  function createSelectorString(c,d,i){
    // Build selector String
    // example: ".fsa-class-name[data-target='" $variable "']",
    return "." + c +"[" + d +"='" +i + "']";
  }

})();
