import React from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const LogoCanvas = (props) => {

  React.useEffect(() => {
    var height = document.getElementById('canvascontain').offsetHeight;
    var width = document.getElementById('canvascontain').offsetWidth;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 400);

    camera.position.set(2, -1.5, 8);
    scene.add(camera)
    const loader = new GLTFLoader();
    const light = new THREE.HemisphereLight(0xfff, 0xfff, 12);
    scene.add(light);
    const renderer = new THREE.WebGL1Renderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    document.getElementById('canvascontain').appendChild(renderer.domElement)
    const clock = new THREE.Clock();
    const loading = () => {
      return new Promise((resolve, reject) => {
        loader.load('../../assets/HackReactor Logo.gltf', function (gltf) {
          resolve(gltf.scene)
        }, undefined, function (error) {
          reject(error)
        })
      })
    };
    const animate = (obj, cam) => {
      requestAnimationFrame( animate.bind(null, obj, cam) );
      obj.rotation.y += Math.PI * 0.002;
      cam.position.y += (Math.cos(clock.getElapsedTime()*4)) * 0.005
      renderer.render( scene, camera );
    }
   loading().then(resp => {
      scene.add(resp)
      return resp})
      .then(resp => animate(resp, camera))
  }, [])

  return (
    <>
    <div id='canvascontain' style={{display:'flex', height:"100vh"}}>
    </div>
    <h1 className="splashText">Attendance <br/>at<br/>Hack Reactor</h1>
    </>
    )
}

export default LogoCanvas;