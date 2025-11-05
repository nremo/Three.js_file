import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes } from './addDefaultMeshes.js';

const renderer = new THREE.WebGLRenderer({antialias:true})
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0,0,5)

const render = new THREE.WebGLRenderer({antialias:true})
const meshes = {}


init()

function init() {
    //
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    // add our meshes into our contrainer ten add to scene
    meshes.default = addDefaultMeshes()
    meshes.copy = addDefaultMeshes()
    meshes.copy2 = addDefaultMeshes()
    //meshes.copy3 = addDefaultMeshes()

    meshes.copy.position.x = 2
    meshes.copy2.position.x = 3
    meshes.copy2.geometry.width = 6
    //meshes.copy3.position.x = -2
    scene.add(meshes.copy, meshes.copy2) //meshes.copy3
    

    //add to scene
    //scene.add(meshes.default)

    // const geometry = new THREE.BoxGeometry(1,1,1)
    // const material = new THREE.MeshBasicMaterial({color: 0xfff000})
    // const mesh = new THREE.Mesh(geometry, material)
    // mesh.position.x=1
    // scene.add(mesh)
    animate(0)
}

function animate() {
    let time = Date.now() * 0.001

    scene.rotation.x = time * 1.5
    scene.rotation.y = time * 1.5
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    console.log(scene.children)

}