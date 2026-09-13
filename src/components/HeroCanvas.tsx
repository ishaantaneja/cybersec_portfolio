import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

type SceneProps = {
  simplified: boolean
}

function WireOrb({
  position,
  scale = 1,
  speed = 0.12,
  detail = 1,
  opacity = 0.32,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
  detail?: number
  opacity?: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed
    ref.current.rotation.y += delta * speed * 0.65
  })

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.45}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, detail]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={opacity} depthWrite={false} />
      </mesh>
    </Float>
  )
}

function SoftCore({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.05
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#0891b2" transparent opacity={0.06} depthWrite={false} />
    </mesh>
  )
}

function TorusRing({
  position,
  scale = 1,
  speed = 0.08,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
}) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed * 0.4
    ref.current.rotation.z += delta * speed
  })

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={ref} position={position} scale={scale} rotation={[0.6, 0.2, 0.1]}>
        <mesh>
          <torusGeometry args={[1.15, 0.02, 12, 64]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.22} depthWrite={false} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.15, 0.005, 8, 96]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.45} depthWrite={false} />
        </mesh>
      </group>
    </Float>
  )
}

function Scene({ simplified }: SceneProps) {
  const orbs = useMemo(
    () =>
      simplified
        ? [{ position: [1.6, 0.15, -0.4] as [number, number, number], scale: 1.55, speed: 0.1, detail: 0, opacity: 0.28 }]
        : [
            { position: [1.85, 0.2, -0.2] as [number, number, number], scale: 1.7, speed: 0.11, detail: 1, opacity: 0.3 },
            { position: [0.35, -0.85, -1.2] as [number, number, number], scale: 0.7, speed: 0.16, detail: 0, opacity: 0.2 },
            { position: [2.8, -0.55, -1.6] as [number, number, number], scale: 0.45, speed: 0.2, detail: 0, opacity: 0.18 },
          ],
    [simplified],
  )

  return (
    <>
      <ambientLight intensity={0.35} />
      <SoftCore position={[1.85, 0.2, -0.6]} scale={simplified ? 1.2 : 1.35} />
      {orbs.map((orb) => (
        <WireOrb key={`${orb.position.join('-')}-${orb.scale}`} {...orb} />
      ))}
      {!simplified && <TorusRing position={[1.9, 0.15, 0.15]} scale={1.05} speed={0.07} />}
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
        dpr={simplified ? [1, 1.25] : [1, 1.6]}
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
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
