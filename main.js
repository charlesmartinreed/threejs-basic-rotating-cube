// 1. Create a SCENE - this sets up what to render and where it will be placed
let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  // 2. Setup the CAMERA, in this example we're using the PerspectiveCamera type
  // takes in FOV, ASPECT, NEAR PLANE, FAR PLANE (plane values set the render min/max distances)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 3. Initialize your RENDERER and set its SIZE
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 4. Add the RENDERER TO THE DOM
  document.body.appendChild(renderer.domElement);

  //5. Using a box geometry object, which is a Geo class for a rect cuboid

  // (depth, width, height)
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  // create a mesh using the object, the textures, etc.
  cube = new THREE.Mesh(geometry, material);

  // 6. Add the object to the scene and draw it to the screen each time the screen is refreshed
  scene.add(cube);

  // 7. By default, camera coords place the camera inside the cube, so let's set it manually
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  //rotate on the x and y axis
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;

  // pass in the scene and the camera created above
  renderer.render(scene, camera);
}

function onWindowResize() {
  // 1. set the camera aspect again
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  // reset the renderer size to the entire window
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// now, when a resize is detected, the cube will be repositioned into the center of the screen
window.addEventListener("resize", onWindowResize, false);

init();
animate();
