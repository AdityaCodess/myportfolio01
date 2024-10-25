// scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Setting up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a geometry (cube) and material (basic material)
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Animate the cube (rotation)
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Responsive resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Start the animation loop
animate();


// Typewriter effect for the tagline
const taglineElement = document.querySelector('.hero-tagline');
const words = ['Developer.', 'Innovator.', 'Tech Enthusiast.'];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true; // Track whether we are typing or erasing

function typeWord() {
    // Clear the tagline element and add the cursor
    taglineElement.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    taglineElement.appendChild(cursor);

    // Start typing the current word
    const currentWord = words[wordIndex];
    const typingInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
            taglineElement.textContent += currentWord.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval); // Stop typing when the word is complete
            isTyping = false; // Indicate we're done typing
            setTimeout(eraseWord, 1000); // Start erasing after a delay
        }
    }, 100); // Speed of typing
}

function eraseWord() {
    const erasingInterval = setInterval(() => {
        if (charIndex > 0) {
            taglineElement.textContent = taglineElement.textContent.slice(0, -1);
            charIndex--;
        } else {
            clearInterval(erasingInterval); // Stop erasing when the word is fully erased
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            charIndex = 0; // Reset charIndex for the next word
            setTimeout(typeWord, 300); // Short pause before typing next word
        }
    }, 50); // Speed of erasing
}

// Start the typewriter effect
typeWord();
