// Lightbox functionality
        let currentImageIndex = 0;
        const images = [
            { src: 'Images/Shirt 1.jpg', caption: 'Shirt 1' },
            { src: 'Images/Shirt 2.jpg', caption: 'Nature Image 2' },
            { src: 'Images/Shirt 3.jpg', caption: 'Nature Image 3' },
            { src: 'Images/Shirt 4.jpg', caption: 'City Image 1' },
            { src: 'Images/Shirt 5.jpg', caption: 'City Image 2' },
            { src: 'Images/Shirt 2.jpg', caption: 'Animal Image 1' },
        ];
        function openLightbox(src, caption) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            // Find the index of the clicked image
            currentImageIndex = images.findIndex(img => img.src === src);
            lightboxImg.src = src;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        function changeImage(direction) {
            currentImageIndex += direction;
            // Wrap around if at beginning or end
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            lightboxImg.src = images[currentImageIndex].src;
            lightboxCaption.textContent = images[currentImageIndex].caption;
        }
        // Close lightbox when clicking outside the image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) {
                closeLightbox();
            }
        });