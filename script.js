const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const isChecked = this.checked;
    if (isChecked) {
      alert(`${this.id} diaktifkan`);
    } else {
      alert(`${this.id} dinonaktifkan`);
    }
  });
});
