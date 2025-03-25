const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Ensure assets directory exists
const assetsDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to generate a placeholder image
function generateImage(width, height, text, filename) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = '#4A90E2';
    ctx.fillRect(0, 0, width, height);

    // Add pattern
    ctx.strokeStyle = '#5A9FF2';
    for (let i = 0; i < width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }

    // Add text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(assetsDir, filename), buffer);
    console.log(`Generated ${filename}`);
}

// Generate all required images
generateImage(1920, 1080, 'Hero Background', 'hero-bg.jpg');
generateImage(1920, 800, 'About Hero Background', 'about-hero.jpg');
generateImage(1920, 800, 'Team Hero Background', 'team-hero.jpg');
generateImage(800, 600, 'About Us', 'about-us.jpg');
generateImage(400, 400, 'Testimonial 1', 'testimonial1.jpg');
generateImage(400, 400, 'Testimonial 2', 'testimonial2.jpg');
generateImage(400, 400, 'Testimonial 3', 'testimonial3.jpg');
generateImage(400, 500, 'Team Member 1', 'team1.jpg');
generateImage(400, 500, 'Team Member 2', 'team2.jpg');
generateImage(400, 500, 'Team Member 3', 'team3.jpg');
generateImage(400, 500, 'Team Member 4', 'team4.jpg');
generateImage(400, 500, 'Team Member 5', 'team5.jpg');
generateImage(400, 500, 'Team Member 6', 'team6.jpg');