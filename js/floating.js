document.addEventListener('DOMContentLoaded', function() {
    const floatImages = document.querySelectorAll('.float');
    const shapes = ['circle', 'square'];
    
    // Chia màn hình thành các phần để phân bố hình ảnh
    const sections = [
        { x: [0, 25], y: [0, 30] },     // Top left
        { x: [75, 100], y: [0, 30] },   // Top right
        { x: [0, 25], y: [70, 100] },   // Bottom left
        { x: [75, 100], y: [70, 100] }, // Bottom right
        { x: [0, 20], y: [35, 65] },    // Middle left
        { x: [80, 100], y: [35, 65] },  // Middle right
    ];

    floatImages.forEach((img, index) => {
        // Chọn hình dạng ngẫu nhiên
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        img.classList.add(randomShape);

        // Chọn section ngẫu nhiên và tính vị trí trong section đó
        const section = sections[index % sections.length];
        const randomX = section.x[0] + Math.random() * (section.x[1] - section.x[0]);
        const randomY = section.y[0] + Math.random() * (section.y[1] - section.y[0]);

        // Thêm một chút ngẫu nhiên cho kích thước
        const randomSize = 90 + Math.random() * 20; // 90px to 110px
        img.style.width = `${randomSize}px`;
        img.style.height = `${randomSize}px`;

        img.style.left = `${randomX}%`;
        img.style.top = `${randomY}%`;
    });
});