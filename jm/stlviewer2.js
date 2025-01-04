/* charset=UTF-8
 * note: version 2 
 * based on: Anthony Biondo  2019-04-14 tonybox.net by [MIT](https://tonybox.net/posts/license/) license 
 * Modif: 2024-11-24 by CJ Zrydys for colors sizes and latest three till r162 webgl1 /before WebGL2 WebGPU 
 * params: 2 consts: "data-src" data-zdistance and class stlviewer on load
 *
 */

 // THREE DATA TEXTURE   RAW DATA TEXTURE ftexture =====================================================
  function magicmatet () { //cj2024 texture
	const width = 32, height = 32;
	const size = width * height;
	const data = new Uint8Array( 4 * size );
	for ( let i = 0; i < size; i ++ ) {
		const stride = i * 4,
		a1 = i / size,
		a2 = i % width / width;
		// set r, g, b, and alpha data values
		data[ stride ] = Math.floor(255 * a1);            // red
		data[ stride + 1 ] = 255 - Math.floor(255 * a1);  // green
		data[ stride + 2 ] = Math.floor(255 * a2);        // blue
		data[ stride + 3 ] = 255;                         // alpha
	}
	const ftexture = new THREE.DataTexture( data, width, height );
	ftexture.needsUpdate = true;
	return ftexture;
 };




// ==========================================
function STLViewerEnable(classname) {
	//const ModDIR o HTTP y 
    var models = document.getElementsByClassName(classname);
    for (var i = 0; i < models.length; i++) {
      STLViewer(models[i], models[i].getAttribute("data-src"), models[i].getAttribute("data-color"));       //ff385c
            //cj debug    STLViewer( models[i],  './models/'+document.getElementById('cj2').innerHTML+'.stl'   );
            //cj debug     console.debug(" stlvie "+i + "  " + models[i] );
    }
}

// ==========================================
function STLViewer(elem, model,colo) {
    var col=0x5f38ff; //;    var col=0xff385c; //;

    if (colo === undefined) { col=0xff385c } else {col=colo; //col=0x5577ff
		 };
        console.log('col'+colo,col,colo+1, (colo));

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
    //!! controls.enableZoom = false;
    //controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.75;
    controls.autoRotateSpeed = 0.25; //cj slow down

     //SCENE
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
        
    //Texture Img  or function magic -- forget it with STL seems take only monocolor monotext  
        const loader = new THREE.TextureLoader();
        const texture = loader.load( './thumb/nn.png ' );// ./models/marble.png  ./bluef.png  
         const ftexture = magicmatet(); //(ftexture)  map: ftexture, queda todo verde!!
 
 
    (new THREE.STLLoader()).load(model, function (geometry) {       //obso THREE.ImageUtils.loadTextu  cj 0xff5533  to cyan

      //    var material = new THREE.MeshPhongMaterial({ color: 0xaa55ee, specular: 100, shininess: 100 , transmission:1 , map:   texture, thicknes: .8 }); // OK but texture saca pixel only nn=rosa marb=whit bluf=dark& crash on 99M
       //   var material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide  }); //dark on texture!?
    var material = new THREE.MeshPhysicalMaterial({ color: col,  transmission:11 , metalness: .8 , roughness: 0.4,  envMapIntensity: 0.5,side: THREE.DoubleSide });  //OK Metalic bright 0xaa55ee / not on 99MB! 
      //cuneiKO var material = new THREE.MeshPhysicalMaterial({ color: 0xee856e,  transmission:11 , metalness: .8 , roughness: 0.4,  envMapIntensity: 0.5,side: THREE.DoubleSide });  //OK Metalic bright / not on 99MB!
        
    //    var material = new THREE.MeshNormalMaterial(  {map: ftexture,  } );   //OK  even 99MB //ftexture cool normal changes colors
  //KO allways inv   var material = new THREE.BasicMaterial(  {side: THREE.BackSide , } );  // no w map:  texture,  (phong rosa, lab=dark,... , wftext green
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

      //ambien
      var aLight = new THREE.AmbientLight(0x808080, 5);
      scene.add(aLight);

	// LIGHT FOR BRILLOS https://tympanus.net/codrops/2021/10/27/creating-the-effect-of-transparent-glass-and-plastic-in-three-js/
	const dlight = new THREE.DirectionalLight(0x8f808d, .1);  //direct to see metal
	dlight.position.set( 0, -15, -10);
	scene.add(dlight);
	const d2light = new THREE.DirectionalLight(0x8f808d, .1);  //direct to see metal
	d2light.position.set(0, 15, 10);
	scene.add(d2light);
	
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


