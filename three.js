import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// document.body.appendChild( renderer.domElement );

const heroSection = document.querySelector('#hero-section');
heroSection.appendChild(renderer.domElement);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


const loader = new GLTFLoader();
let model;
loader.load( './scene.gltf', function ( gltf ) {
     model = gltf.scene ;
	scene.add( gltf.scene );
	adjustCameraForScreenSize();

}, undefined, function ( error ) {

	console.error( error );

} );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;

const ambientLight = new THREE.AmbientLight(0xffffff);
const light = new THREE.AmbientLight(0x404040);

scene.add(ambientLight,light);

// Adjust camera position based on screen size
function adjustCameraForScreenSize() {
    if (window.innerWidth < 500) {
        camera.position.set(0, 1, 8);
        if (model) model.scale.set(0.7, 0.7, 0.7);
    } else if (window.innerWidth < 735) {
        camera.position.set(0, 1, 7);
        if (model) model.scale.set(0.8, 0.8, 0.8);
    } else if (window.innerWidth < 992) {
        camera.position.set(0, 1, 6);
        if (model) model.scale.set(0.9, 0.9, 0.9);
    } else {
        camera.position.set(0, 1, 5);
        if (model) model.scale.set(1, 1, 1);
    }
}

adjustCameraForScreenSize();
controls.update();

window.addEventListener('resize', adjustCameraForScreenSize);

function animate(){
    requestAnimationFrame(animate);
    if (model) {
        model.position.y = -2;
    }
    controls.update();
    renderer.render(scene,camera);
}
animate();