export const handleContactScroll = () => {
    const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                  block: "start" 
                });
        }
    
    }
    export const handleHomeScroll = () => {
    const element = document.getElementById('home')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                  block: "center" 
                });

        }
    
    }
    export const handleExperienceScroll = () => {
    const element = document.getElementById('experience')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                block:'start'
                });

        }
    
    }
    export const handleServicesScroll = () => {
        const element = document.getElementById('services')
            if (element) {
                element.scrollIntoView({
                     behavior: "smooth",
                    block:'start'
                    });
    
            }
        
        }
    export const handleProjectsScroll = () => {
        const element = document.getElementById('projects')
            if (element) {
                element.scrollIntoView({
                     behavior: "smooth",
                    block:'start'
                    });
    
            }
        
    }