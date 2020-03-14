let three_view = document.getElementById('three_view');
let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();


let width = window.innerWidth;
let height = window.innerHeight;
let view_angle =  45;
let near = 0.1;
let far = 100;

let camera = new THREE.PerspectiveCamera(view_angle, width/height, near, far);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;
camera.lookAt(scene.position);

renderer.setSize(width, height);
three_view.appendChild(renderer.domElement);

// Plane
{
let plane = new THREE.PlaneBufferGeometry(40,40);
let material = new THREE.MeshPhongMaterial({
    color: 0xAAAAAA,
    specular: 0x101010
})
let mesh = new THREE.Mesh(geometry,material);
}
scene.add(mesh);
{
let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshLambertMaterial({
    color: 0xff0000
});

let mesh = new THREE.Mesh(geometry, material);
}

scene.add(mesh);

let light = new THREE.DirectionalLight(0xAAAAAA, 1.3);
light.position.x = 10;
light.position.y = 10;
light.position.z = 10;

light.lookAt = new THREE.Vector3(0,0,0);

scene.add(light);


const animate = ()=>{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

const resize = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;    
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

window.onresize = resize;


// Camera setup
