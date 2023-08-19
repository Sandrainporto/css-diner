export default function showBurger(): void {
    const burgerIcon: HTMLDivElement | null = document.querySelector('.burger');
    const span: HTMLSpanElement | null = document.querySelector('.burger-icon');
    const levelsList: HTMLDivElement | null = document.querySelector('.levels__list');
    const blockContainer: HTMLDivElement | null = document.querySelector('.sidebar');
    const resetBtn: HTMLButtonElement | null = document.querySelector('.reset-btn');

    if (burgerIcon && span && levelsList && blockContainer && resetBtn) {
        burgerIcon.classList.toggle('active');
        levelsList.classList.toggle('active');
        span.classList.toggle('active');
        blockContainer.classList.toggle('active');
        resetBtn.classList.toggle('active');
    }
}
