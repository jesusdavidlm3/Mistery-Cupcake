/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf 
Author: ¡Jacques (https://sketchfab.com/iJacques)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cupcakes-409d1fb2508d46b18ed5689cbfbbba53
Title: Cupcakes
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 3, 0, 1.6]}>
        <group position={[0, 2.745, 0]} rotation={[0, 0, 1.745]}>
          <mesh geometry={nodes.Cupcake_S_0.geometry} material={materials.Cupcake_S} />
          <mesh geometry={nodes.Cupcake_S_1.geometry} material={materials.Cupcake_paper_S} />
          <mesh geometry={nodes.Cupcake_S_2.geometry} material={materials.Icing_S} />
        </group>
        <group position={[-0.239, -2.842, 0]} rotation={[0, 0, -Math.PI / 3]}>
          <mesh geometry={nodes.Cupcake_C_0.geometry} material={materials.Cupcake_C} />
          <mesh geometry={nodes.Cupcake_C_1.geometry} material={materials.Cupcake_paper_C} />
          <mesh geometry={nodes.Cupcake_C_2.geometry} material={materials.Icing_C} />
          <mesh geometry={nodes.Cupcake_C_3.geometry} material={materials.Chocolate} />
        </group>
        <mesh geometry={nodes.Cupcake_V_0.geometry} material={materials.Cupcake_paper_V} />
        <mesh geometry={nodes.Cupcake_V_1.geometry} material={materials.Icing_V} />
        <mesh geometry={nodes.Cupcake_V_2.geometry} material={materials.Cupcake} />
        <mesh geometry={nodes.Cupcake_V_3.geometry} material={materials.Rainbow_topping} />
        <mesh geometry={nodes.Cupcake_V_3_1.geometry} material={materials.Rainbow_topping} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
