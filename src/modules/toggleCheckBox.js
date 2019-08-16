export default function toggleCheckBox() {
    const checkbox = document.querySelectorAll('#discount-checkbox');
    checkbox.forEach((element) => {
        element.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}
