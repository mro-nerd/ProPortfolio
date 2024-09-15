import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

const heroSection = document.querySelector('#hero-section');
heroSection.appendChild(renderer.domElement);


const loader = new GLTFLoader();
let model;
loader.load( './scene.gltf', function ( gltf ) {
     model = gltf.scene ;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;

const ambientLight = new THREE.AmbientLight(0xffffff);
const light = new THREE.AmbientLight(0x404040);

scene.add(ambientLight,light);

camera.position.set(0,1,5);
controls.update();

function animate(){
    requestAnimationFrame(animate);
    model.position.y=-2;
    controls.update();
    renderer.render(scene,camera);
}
animate();