export default {
  install(app, options) {
    // inject a globally available $translate() method
    app.config.globalProperties.$toggleClasses = (elementId, classToAdd = null, classToRemove = null | 'toggle') => {
      const targetElement = document.getElementById(elementId);
        // Add only
        if (classToRemove === 'toggle') {
            targetElement.classList.toggle(classToAdd);
            return;
        }

        // Add only
        if (classToRemove === null) {
            targetElement.classList.add(classToAdd);
            return;
        }

        // Remove only
        if (classToAdd === null) {
            targetElement.classList.remove(classToRemove);
            return;
        }

        targetElement.classList.remove(classToRemove);
        targetElement.classList.add(classToAdd);
    },
    app.config.globalProperties.$getDevice = () => {
      const pageWidth = window.innerWidth;
      if (pageWidth <= 639) {
        return 'mobile'
      }


      if (pageWidth >= 640 && pageWidth <= 1023) {
        return 'tablet'
      }

      if (pageWidth >= 1024 && pageWidth <= 1279) {
        return 'laptop'
      }

      if (pageWidth >= 1280) {
        return 'pc'
      }
    }
  }
}