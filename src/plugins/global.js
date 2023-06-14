export default {
  install(app, options) {
    /**
     * toggle static multiple classes
     */
    app.config.globalProperties.$handleMultipleClasses = (elementId, classToAlter, method) => {
      const targetElement = document.getElementById(elementId);

      classToAlter.forEach(c => {
        targetElement.classList[method](c);
      });
      return;
    },
    app.config.globalProperties.$toggleClasses = (elementId, classToAdd = null, classToRemove = null | 'toggle') => {
        const targetElement = document.getElementById(elementId);

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
        return 'mobile';
      }


      if (pageWidth >= 640 && pageWidth <= 1023) {
        return 'tablet';
      }

      if (pageWidth >= 1024 && pageWidth <= 1279) {
        return 'laptop';
      }

      if (pageWidth >= 1280) {
        return 'pc';
      }
    },
    app.config.globalProperties.$toggleClass = (element, ...classes) => {
      classes.map(cl => element.classList.toggle(cl));
    },
    app.config.globalProperties.$toggleDarkMode = () => {
      document.documentElement.classList.toggle('dark');
    }
  }
}