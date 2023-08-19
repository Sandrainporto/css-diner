export default function loadProgress(): void {
    window.addEventListener('load', () => {
        const classesArray = JSON.parse(localStorage.getItem('classesArray') as string);
        const levelLinks = document.querySelectorAll('.level__link');
        const elements = Array.from(levelLinks);

        for (let i = 0; i < elements.length; i++) {
            const classes = classesArray[i].split(' ');
            classes.forEach((cssClass: string) => elements[i].classList.add(cssClass));
        }
    });
}
