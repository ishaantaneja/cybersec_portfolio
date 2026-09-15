import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'

type SceneProps = {
  simplified: boolean
}

type SoftSphereProps = {
  position: [number, number, number]
  scale?: number
  speed?: number
  color?: string
  roughness?: number
  metalness?: number
  transmission?: number
  thickness?: number
  ior?: number
  clearcoat?: number
  opacity?: number
  segments?: number
}

function SoftSphere({
  position,
  scale = 1,
  speed = 0.06,
  color = '#e8eef5',
  roughness = 0.55,
  metalness = 0.08,
  transmission = 0,
  thickness = 0.6,
  ior = 1.4,
  clearcoat = 0.35,
  opacity = 1,
  segments = 64,
}: SoftSphereProps) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * speed
    ref.current.rotation.x += delta * speed * 0.35
  })

  const transparent = opacity < 1 || transmission > 0

  return (
    <Float speed={0.55} rotationIntensity={0.08} floatIntensity={0.35}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, segments, segments]} />
        <meshPhysicalMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          transmission={transmission}
          thickness={thickness}
          ior={ior}
          clearcoat={clearcoat}
          clearcoatRoughness={0.35}
          transparent={transparent}
          opacity={opacity}
          envMapIntensity={1.1}
        />
      </mesh>
    </Float>
  )
}

function Scene({ simplified }: SceneProps) {
  const spheres = useMemo(() => {
    if (simplified) {
      return [
        {
          position: [1.2, 0.12, 0] as [number, number, number],
          scale: 1.55,
          speed: 0.045,
          color: '#f2f6fa',
          roughness: 0.22,
          metalness: 0.05,
          transmission: 0.72,
          thickness: 1.1,
          ior: 1.45,
          clearcoat: 0.55,
          segments: 48,
        },
        {
          position: [0.35, -0.85, -0.7] as [number, number, number],
          scale: 0.55,
          speed: 0.07,
          color: '#c8d4e0',
          roughness: 0.72,
          metalness: 0.12,
          transmission: 0,
          clearcoat: 0.2,
          segments: 32,
        },
      ]
    }

    return [
      {
        position: [1.35, 0.18, 0.1] as [number, number, number],
        scale: 1.72,
        speed: 0.04,
        color: '#f4f7fb',
        roughness: 0.16,
        metalness: 0.04,
        transmission: 0.82,
        thickness: 1.35,
        ior: 1.48,
        clearcoat: 0.7,
        segments: 64,
      },
      {
        position: [0.2, -0.95, -0.85] as [number, number, number],
        scale: 0.62,
        speed: 0.065,
        color: '#d7e0ea',
        roughness: 0.68,
        metalness: 0.1,
        transmission: 0,
        clearcoat: 0.25,
        segments: 48,
      },
      {
        position: [2.45, -0.55, -1.05] as [number, number, number],
        scale: 0.42,
        speed: 0.08,
        color: '#b8c9d6',
        roughness: 0.45,
        metalness: 0.18,
        transmission: 0.35,
        thickness: 0.5,
        ior: 1.4,
        clearcoat: 0.4,
        opacity: 0.92,
        segments: 40,
      },
      {
        position: [2.05, 0.95, -0.9] as [number, number, number],
        scale: 0.28,
        speed: 0.09,
        color: '#9ec5d4',
        roughness: 0.55,
        metalness: 0.08,
        transmission: 0.25,
        thickness: 0.4,
        clearcoat: 0.3,
        opacity: 0.88,
        segments: 32,
      },
    ]
  }, [simplified])

  return (
    <>
      <ambientLight intensity={0.35} color="#e8eef8" />
      {/* Key */}
      <directionalLight position={[4.5, 5.5, 3.5]} intensity={1.55} color="#ffffff" />
      {/* Fill */}
      <directionalLight position={[-3.5, 1.2, 2]} intensity={0.45} color="#b8d4e8" />
      {/* Rim */}
      <directionalLight position={[1.5, -1.5, -4]} intensity={0.65} color="#dce8f2" />
      <pointLight position={[2.2, 2.4, 2]} intensity={0.55} color="#f5f8fc" distance={12} decay={2} />

      <Environment preset="studio" environmentIntensity={0.55} />

      {spheres.map((sphere) => (
        <SoftSphere key={`${sphere.position.join('-')}-${sphere.scale}`} {...sphere} />
      ))}

      <ContactShadows
        position={[1.2, -1.55, 0]}
        opacity={0.28}
        scale={12}
        blur={2.8}
        far={5}
        resolution={simplified ? 256 : 512}
        color="#02040a"
      />
    </>
  )
}

export type HeroCanvasProps = {
  simplified?: boolean
}

export default function HeroCanvas({ simplified = false }: HeroCanvasProps) {
  return (
    <div
      className="hero-canvas pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        dpr={simplified ? [1, 1.15] : [1, 1.75]}
        camera={{ position: [0, 0.15, 5.8], fov: 38, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: simplified ? 'low-power' : 'default',
          stencil: false,
        }}
        frameloop="always"
        style={{ width: '100%', height: '100%' }}
      >
        <Scene simplified={simplified} />
      </Canvas>
    </div>
  )
}
