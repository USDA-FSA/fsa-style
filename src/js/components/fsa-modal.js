var FSAModal = (function() {
    //Private variables
    var _modal = {};

    // PRIVATE METHODS
    var _open = function(){

    };

    var _close = function(){

    };

    // PUBLIC METHODS
    var openModal = function(){
      _open();
    };

    var closeModal = function(){
      _close();
    };

    return {
      // declare public variables and/or functions
      open: openModal,
      close: closeModal
    };

})();

// useage FSAModal.open(); or FSAModal.close();
