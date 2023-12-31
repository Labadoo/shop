 // ใส่สคริปต์ JavaScript เพื่อควบคุมปุ่มเพิ่มและลดจำนวนสินค้า
 document.addEventListener("DOMContentLoaded", () => {
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach(input => {
      const minusBtn = input.parentNode.querySelector(".minus");
      const plusBtn = input.parentNode.querySelector(".plus");
      
      minusBtn.addEventListener("click", () => {
        if (input.value > 1) {
          input.value = parseInt(input.value) - 1;
        }
      });
      
      plusBtn.addEventListener("click", () => {
        input.value = parseInt(input.value) + 1;
      });
    });
  });