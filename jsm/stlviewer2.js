/* charset=UTF-8
 * note: version 2 
 * based on: Anthony Biondo  2019-04-14 tonybox.net by [MIT](https://tonybox.net/posts/license/) license 
 * Modif: 2024-11-24 by CJ Zrydys for colors sizes and latest three till r162 webgl1 /before WebGL2 WebGPU 
 * params: 2 consts: "data-src" data-zdistance and class stlviewer on load
 *
 */

// ==========================================
function STLViewerEnable(classname) {
	//const ModDIR o HTTP y 
    var models = document.getElementsByClassName(classname);
    for (var i = 0; i < models.length; i++) {
      STLViewer(models[i], models[i].getAttribute("data-src"));
            //cj debug    STLViewer( models[i],  './models/'+document.getElementById('cj2').innerHTML+'.stl'   );
            //cj debug     console.debug(" stlvie "+i + "  " + models[i] );
    }
}

// ==========================================
function STLViewer(elem, model) {

    //if (!WEBGL.isWebGLAvailable()) {    elem.appendChild(WEBGL.getWebGLErrorMessage());   return;   }  //cj if err err

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    var camera = new THREE.PerspectiveCamera(50, elem.clientWidth / elem.clientHeight, 1, 1000);
    
    renderer.setSize(elem.clientWidth, elem.clientHeight);
    elem.appendChild(renderer.domElement);

    window.addEventListener('resize', function () {
        renderer.setSize(elem.clientWidth, elem.clientHeight);
        camera.aspect = elem.clientWidth / elem.clientHeight;
        camera.updateProjectionMatrix();
    }, false);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.05;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.75;
    controls.autoRotateSpeed = 0.55; //cj slow down

    var scene = new THREE.Scene();

    scene.add(new THREE.HemisphereLight(0xffffff, 0x080820, 1.5));
	//cj light2 with somehow red spot :-)
	var light = new THREE.SpotLight( 0xFFAA55 );
    light.castShadow = true;
    light.position.set( 1, 3, 5 );
    light.shadowCameraNear = 0.5;
    scene.add( light );
    // helper = new THREE.CameraHelper( light.shadow.camera );
    //    scene.add( helper );  //this helps locate lines
        
        
    (new THREE.STLLoader()).load(model, function (geometry) {  
        var material = new THREE.MeshPhongMaterial({ color: 0xaa55ee, specular: 100, shininess: 100 });   //cj 0xff5533  to cyan
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);


        // Compute the middle
        var middle = new THREE.Vector3();
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(middle);

        // Center it
        mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -middle.x, -middle.y, -middle.z ) );
        
        // Rotate, if desired
        if(elem.getAttribute("data-rotate") == "x") 
            mesh.rotation.x = -Math.PI/2
   if(elem.getAttribute("data-rotate") == "c")           {  mesh.rotation.y = -Math.PI/3;   mesh.rotation.z = -Math.PI/7}  //cj dual rot
            
        // Pull the camera away as needed
        var largestDimension = Math.max(geometry.boundingBox.max.x,
            geometry.boundingBox.max.y, geometry.boundingBox.max.z)
        camera.position.z = largestDimension * elem.getAttribute("data-zdistance");


        var animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }; animate();

    });
}

window.onload = function () {
	        console.debug(" stlvie start" + THREE.REVISION );

    STLViewerEnable("stlviewer");
}


