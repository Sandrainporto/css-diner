export default function saveProgress(): void {
    window.addEventListener('beforeunload', () => {
        const levelLinks = document.querySelectorAll('.level__link');
        const elements = Array.from(levelLinks);
        const classesArray = [];

        for (let i = 0; i < elements.length; i++) {
            const classes = elements[i].classList.toString();
            classesArray.push(classes);
        }
        localStorage.setItem('classesArray', JSON.stringify(classesArray));
    });
}
