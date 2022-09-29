/* ___________________________ mp_header_3d_model __________________________ */
//Variables
let container;
let camera;
let renderer;
let scene;

function init() {
  container = document.querySelector(".mp_header_3d_bmc");

  //Create scene
  scene = new THREE.Scene();

  //Camera setup
  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 25);

  // Lights
  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0x8C5FEE, 2);
  light.position.set(50, 50, 100);
  scene.add(light);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  var gltfLoader = new THREE.GLTFLoader();
  var dracoLoader = new THREE.DRACOLoader();
  dracoLoader.setDecoderPath( 'static/' )
  gltfLoader.setDRACOLoader( dracoLoader );
  
  gltfLoader.load("https://static.igem.wiki/teams/4229/wiki/three-d-obj/bmc-outlined-compressed.gltf", function(gltf) {


    bmc = gltf.scene.children[0];
    bmc.position.set(-0.124, 0, 24.6);
    scene.add(bmc);

    animate();
  });
}

// Animating the model
function animate() {
  requestAnimationFrame(animate);

  bmc.rotation.z += 0.0001;
  bmc.rotation.y -= 0.0002;
  bmc.rotation.x = 0.0003;

  renderer.render(scene, camera);
}

init();

// Responsiveness
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
