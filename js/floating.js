document.addEventListener('DOMContentLoaded', function() {
    const floatImages = document.querySelectorAll('.float');
    const shapes = ['circle', 'square'];
    
    // Định nghĩa sections cho desktop và mobile
    const sections = {
        desktop: [
            { x: [0, 25], y: [0, 30] },     // Top left
            { x: [75, 100], y: [0, 30] },   // Top right
            { x: [0, 25], y: [70, 100] },   // Bottom left
            { x: [75, 100], y: [70, 100] }, // Bottom right
            { x: [0, 20], y: [35, 65] },    // Middle left
            { x: [80, 100], y: [35, 65] },  // Middle right
        ],
        mobile: [
            { x: [0, 30], y: [0, 20] },     // Top
            { x: [0, 30], y: [80, 100] },   // Bottom
            { x: [70, 100], y: [0, 20] },   // Top right
            { x: [70, 100], y: [80, 100] }, // Bottom right
        ]
    };

    function positionImages() {
        const isMobile = window.innerWidth <= 600;
        const currentSections = isMobile ? sections.mobile : sections.desktop;
        const baseSize = isMobile ? 50 : 90; // Smaller base size for mobile
        const sizeVariation = isMobile ? 10 : 20; // Less variation for mobile

        floatImages.forEach((img, index) => {
            // Chọn hình dạng ngẫu nhiên
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            img.classList.remove('circle', 'square');
            img.classList.add(randomShape);

            // Chọn section và tính vị trí
            const section = currentSections[index % currentSections.length];
            const randomX = section.x[0] + Math.random() * (section.x[1] - section.x[0]);
            const randomY = section.y[0] + Math.random() * (section.y[1] - section.y[0]);

            // Tính kích thước phù hợp với thiết bị
            const randomSize = baseSize + Math.random() * sizeVariation;
            
            // Áp dụng các thuộc tính
            img.style.width = `${randomSize}px`;
            img.style.height = `${randomSize}px`;
            img.style.left = `${randomX}%`;
            img.style.top = `${randomY}%`;
        });
    }

    // Chạy lần đầu
    positionImages();

    // Cập nhật khi thay đổi kích thước màn hình
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(positionImages, 250);
    });
});
