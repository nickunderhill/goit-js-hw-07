document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');
  
    input.addEventListener('input', function() {
      const trimmedInput = input.value.trim();
      output.textContent = trimmedInput ? trimmedInput : 'Anonymous';
    });
  });
  