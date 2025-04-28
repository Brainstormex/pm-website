// "use client"

// import type React from "react"
// import { useEffect, useRef, useState } from "react"
// import { motion, useAnimation, AnimatePresence } from "framer-motion"
// import * as THREE from "three"

// // Define types
// type BlockState = "active" | "stopped" | "missed"
// type WorkingPlane = "x" | "z"
// type GameState = "loading" | "ready" | "playing" | "ended" | "resetting"

// interface BlockReturn {
//   placed?: THREE.Mesh
//   chopped?: THREE.Mesh
//   plane: WorkingPlane
//   direction: number
//   bonus?: boolean
// }

// interface BlockDimension {
//   width: number
//   height: number
//   depth: number
// }

// interface BlockPosition {
//   x: number
//   y: number
//   z: number
// }

// class Block {
//   private STATES = {
//     ACTIVE: "active" as BlockState,
//     STOPPED: "stopped" as BlockState,
//     MISSED: "missed" as BlockState,
//   }
//   private MOVE_AMOUNT = 12

//   dimension: BlockDimension = { width: 0, height: 0, depth: 0 }
//   position: BlockPosition = { x: 0, y: 0, z: 0 }

//   mesh: THREE.Mesh
//   state: BlockState
//   index: number
//   speed: number
//   direction: number
//   colorOffset: number
//   color: THREE.Color | number
//   material: THREE.Material

//   workingPlane: WorkingPlane
//   workingDimension: "width" | "depth"

//   targetBlock: Block | null

//   constructor(block: Block | null) {
//     // Set target block
//     this.targetBlock = block

//     this.index = (this.targetBlock ? this.targetBlock.index : 0) + 1
//     this.workingPlane = this.index % 2 ? "x" : "z"
//     this.workingDimension = this.index % 2 ? "width" : "depth"

//     // Set dimensions from target block or defaults
//     this.dimension.width = this.targetBlock ? this.targetBlock.dimension.width : 10
//     this.dimension.height = this.targetBlock ? this.targetBlock.dimension.height : 2
//     this.dimension.depth = this.targetBlock ? this.targetBlock.dimension.depth : 10

//     this.position.x = this.targetBlock ? this.targetBlock.position.x : 0
//     this.position.y = this.dimension.height * this.index
//     this.position.z = this.targetBlock ? this.targetBlock.position.z : 0

//     this.colorOffset = this.targetBlock ? this.targetBlock.colorOffset : Math.round(Math.random() * 100)

//     // Set color
//     if (!this.targetBlock) {
//       this.color = 0x333344
//     } else {
//       const offset = this.index + this.colorOffset
//       const r = Math.sin(0.3 * offset) * 55 + 200
//       const g = Math.sin(0.3 * offset + 2) * 55 + 200
//       const b = Math.sin(0.3 * offset + 4) * 55 + 200
//       this.color = new THREE.Color(r / 255, g / 255, b / 255)
//     }

//     // Set state
//     this.state = this.index > 1 ? this.STATES.ACTIVE : this.STATES.STOPPED

//     // Set direction and speed
//     this.speed = -0.1 - this.index * 0.005
//     if (this.speed < -4) this.speed = -4
//     this.direction = this.speed

//     // Create block mesh
//     const geometry = new THREE.BoxGeometry(this.dimension.width, this.dimension.height, this.dimension.depth)
//     geometry.translate(this.dimension.width / 2, this.dimension.height / 2, this.dimension.depth / 2)

//     this.material = new THREE.MeshToonMaterial({
//       color: this.color,
//     })

//     this.mesh = new THREE.Mesh(geometry, this.material)
//     this.mesh.position.set(
//       this.position.x,
//       this.position.y + (this.state === this.STATES.ACTIVE ? 0 : 0),
//       this.position.z,
//     )

//     if (this.state === this.STATES.ACTIVE) {
//       this.position[this.workingPlane] = Math.random() > 0.5 ? -this.MOVE_AMOUNT : this.MOVE_AMOUNT
//     }
//   }

//   reverseDirection(): void {
//     this.direction = this.direction > 0 ? this.speed : Math.abs(this.speed)
//   }

//   place(): BlockReturn {
//     this.state = this.STATES.STOPPED

//     if (!this.targetBlock) {
//       return { plane: this.workingPlane, direction: this.direction }
//     }

//     const overlap =
//       this.targetBlock.dimension[this.workingDimension] -
//       Math.abs(this.position[this.workingPlane] - this.targetBlock.position[this.workingPlane])

//     const blocksToReturn: BlockReturn = {
//       plane: this.workingPlane,
//       direction: this.direction,
//     }

//     if (this.dimension[this.workingDimension] - overlap < 0.3) {
//       const perfectOverlap = this.dimension[this.workingDimension]
//       blocksToReturn.bonus = true
//       this.position.x = this.targetBlock.position.x
//       this.position.z = this.targetBlock.position.z
//       this.dimension.width = this.targetBlock.dimension.width
//       this.dimension.depth = this.targetBlock.dimension.depth
//     }

//     if (overlap > 0) {
//       const choppedDimensions = {
//         width: this.dimension.width,
//         height: this.dimension.height,
//         depth: this.dimension.depth,
//       }
//       choppedDimensions[this.workingDimension] -= overlap
//       this.dimension[this.workingDimension] = overlap

//       // Create placed block mesh
//       const placedGeometry = new THREE.BoxGeometry(this.dimension.width, this.dimension.height, this.dimension.depth)
//       placedGeometry.translate(this.dimension.width / 2, this.dimension.height / 2, this.dimension.depth / 2)
//       const placedMesh = new THREE.Mesh(placedGeometry, this.material)

//       // Create chopped block mesh
//       const choppedGeometry = new THREE.BoxGeometry(
//         choppedDimensions.width,
//         choppedDimensions.height,
//         choppedDimensions.depth,
//       )
//       choppedGeometry.translate(choppedDimensions.width / 2, choppedDimensions.height / 2, choppedDimensions.depth / 2)
//       const choppedMesh = new THREE.Mesh(choppedGeometry, this.material)

//       // Set positions
//       const choppedPosition = {
//         x: this.position.x,
//         y: this.position.y,
//         z: this.position.z,
//       }

//       if (this.position[this.workingPlane] < this.targetBlock.position[this.workingPlane]) {
//         this.position[this.workingPlane] = this.targetBlock.position[this.workingPlane]
//       } else {
//         choppedPosition[this.workingPlane] += overlap
//       }

//       placedMesh.position.set(this.position.x, this.position.y, this.position.z)
//       choppedMesh.position.set(choppedPosition.x, choppedPosition.y, choppedPosition.z)

//       blocksToReturn.placed = placedMesh
//       if (!blocksToReturn.bonus) blocksToReturn.chopped = choppedMesh
//     } else {
//       this.state = this.STATES.MISSED
//     }

//     this.dimension[this.workingDimension] = overlap > 0 ? overlap : 0

//     return blocksToReturn
//   }

//   tick(): void {
//     if (this.state === this.STATES.ACTIVE) {
//       const value = this.position[this.workingPlane]
//       if (value > this.MOVE_AMOUNT || value < -this.MOVE_AMOUNT) {
//         this.reverseDirection()
//       }
//       this.position[this.workingPlane] += this.direction
//       this.mesh.position[this.workingPlane] = this.position[this.workingPlane]
//     }
//   }
// }

// class Stage {
//   container: HTMLElement
//   camera: THREE.OrthographicCamera
//   scene: THREE.Scene
//   renderer: THREE.WebGLRenderer
//   light: THREE.DirectionalLight
//   softLight: THREE.AmbientLight
//   cameraControls: {
//     position: { y: number }
//     lookAt: { y: number }
//   }

//   constructor(container: HTMLElement) {
//     // Set container
//     this.container = container

//     // Create renderer
//     this.renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: false,
//     })

//     // Set initial size to match container
//     const containerRect = container.getBoundingClientRect()
//     this.renderer.setSize(containerRect.width, containerRect.height)
//     this.renderer.setClearColor("#D0CBC7", 1)
//     this.container.appendChild(this.renderer.domElement)

//     // Create scene
//     this.scene = new THREE.Scene()

//     // Create camera
//     const aspect = containerRect.width / containerRect.height
//     const d = 20
//     this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, -100, 1000)
//     this.camera.position.set(2, 2, 2)
//     this.camera.lookAt(new THREE.Vector3(0, 0, 0))

//     // Camera controls for animation
//     this.cameraControls = {
//       position: { y: this.camera.position.y },
//       lookAt: { y: 0 },
//     }

//     // Create lights
//     this.light = new THREE.DirectionalLight(0xffffff, 0.5)
//     this.light.position.set(0, 499, 0)
//     this.scene.add(this.light)

//     this.softLight = new THREE.AmbientLight(0xffffff, 0.4)
//     this.scene.add(this.softLight)

//     // Add resize observers
//     window.addEventListener("resize", () => this.onResize())
    
//     // Use ResizeObserver to detect container size changes
//     if (typeof ResizeObserver !== 'undefined') {
//       const resizeObserver = new ResizeObserver(() => {
//         this.onResize()
//       })
//       resizeObserver.observe(container)
//     }
    
//     this.onResize()
//   }

//   setCamera(y: number, speed = 0.3): void {
//     // Using direct animation instead of GSAP
//     this.cameraControls.position.y = y + 4
//     this.cameraControls.lookAt.y = y

//     // Apply the camera position changes
//     this.camera.position.y = this.cameraControls.position.y
//     this.camera.lookAt(new THREE.Vector3(0, this.cameraControls.lookAt.y, 0))
//   }

//   onResize(): void {
//     // Get container dimensions
//     const containerRect = this.container.getBoundingClientRect()
//     const width = containerRect.width
//     const height = containerRect.height

//     const viewSize = 30
//     this.renderer.setSize(width, height)
    
//     // Update camera aspect ratio
//     const aspect = width / height
//     this.camera.left = -viewSize * aspect
//     this.camera.right = viewSize * aspect
//     this.camera.top = viewSize
//     this.camera.bottom = -viewSize
//     this.camera.updateProjectionMatrix()
//   }

//   render(): void {
//     this.renderer.render(this.scene, this.camera)
//   }

//   add(elem: THREE.Object3D): void {
//     this.scene.add(elem)
//   }

//   remove(elem: THREE.Object3D): void {
//     this.scene.remove(elem)
//   }
// }

// class Game {
//   private STATES = {
//     LOADING: "loading" as GameState,
//     PLAYING: "playing" as GameState,
//     READY: "ready" as GameState,
//     ENDED: "ended" as GameState,
//     RESETTING: "resetting" as GameState,
//   }

//   blocks: Block[] = []
//   state: GameState = "loading"

//   // Groups
//   newBlocks: THREE.Group = new THREE.Group();
//   placedBlocks: THREE.Group = new THREE.Group();
//   choppedBlocks: THREE.Group = new THREE.Group();

//   // UI elements
//   scoreContainer: HTMLElement;
//   mainContainer: HTMLElement;
//   startButton: HTMLElement;
//   instructions: HTMLElement;
//   titleElement: HTMLElement;
//   gameOverTitle: HTMLElement;
//   gameOverMessage: HTMLElement;
//   gameOverAction: HTMLElement;
//   gameOverScore: HTMLElement;

//   // Stage
//   stage!: Stage;

//   // Animation frame ID
//   animationFrameId: number | null = null;

//   // Animation controls
//   animationControls: {
//     [key: string]: any
//   } = {}

//   constructor(
//     container: HTMLElement,
//     scoreContainer: HTMLElement | null,
//     startButton: HTMLElement | null,
//     instructions: HTMLElement | null,
//     titleElement: HTMLElement | null,
//     gameOverTitle: HTMLElement | null,
//     gameOverMessage: HTMLElement | null,
//     gameOverAction: HTMLElement | null,
//     gameOverScore: HTMLElement | null,
//   ) {
//     this.mainContainer = container
//     this.scoreContainer = scoreContainer || document.createElement("div")
//     this.startButton = startButton || document.createElement("div")
//     this.instructions = instructions || document.createElement("div")
//     this.titleElement = titleElement || document.createElement("div")
//     this.gameOverTitle = gameOverTitle || document.createElement("div")
//     this.gameOverMessage = gameOverMessage || document.createElement("div")
//     this.gameOverAction = gameOverAction || document.createElement("div")
//     this.gameOverScore = gameOverScore || document.createElement("div")

//     if (this.scoreContainer) {
//       this.scoreContainer.innerHTML = "0"
//     }

//     // Create stage
//     const gameElement = this.mainContainer.querySelector("#game") as HTMLElement
//     if (!gameElement) {
//       console.error("Game element not found")
//       return
//     }
    
//     // Create stage with the game element (not the whole container)
//     this.stage = new Stage(gameElement)

//     // Create groups
//     this.newBlocks = new THREE.Group()
//     this.placedBlocks = new THREE.Group()
//     this.choppedBlocks = new THREE.Group()

//     this.stage.add(this.newBlocks)
//     this.stage.add(this.placedBlocks)
//     this.stage.add(this.choppedBlocks)

//     // Add first block
//     this.addBlock()

//     // Start game loop
//     this.tick()

//     // Set initial state
//     this.updateState(this.STATES.READY)

//     // Add event listeners
//     document.addEventListener("keydown", (e) => {
//       if (e.code === "Space") {
//         e.preventDefault(); // Prevent spacebar from scrolling the page
//         this.onAction()
//       }
//     })

//     document.addEventListener("click", () => {
//       this.onAction()
//     })

//     document.addEventListener("touchstart", (e) => {
//       e.preventDefault()
//       // Not calling onAction here to prevent double triggers on Android
//     })
//   }

//   updateState(newState: GameState): void {
//     // Remove all state classes
//     Object.values(this.STATES).forEach((state) => {
//       this.mainContainer.classList.remove(state)
//     })

//     // Add new state class
//     this.mainContainer.classList.add(newState)
//     this.state = newState
//   }

//   onAction(): void {
//     switch (this.state) {
//       case this.STATES.READY:
//         this.startGame()
//         break
//       case this.STATES.PLAYING:
//         this.placeBlock()
//         break
//       case this.STATES.ENDED:
//         this.restartGame()
//         break
//     }
//   }

//   startGame(): void {
//     if (this.state !== this.STATES.PLAYING) {
//       if (this.scoreContainer) {
//         this.scoreContainer.innerHTML = "0"
//       }
//       this.updateState(this.STATES.PLAYING)
//       this.addBlock()
//     }
//   }

//   restartGame(): void {
//     this.updateState(this.STATES.RESETTING)

//     const oldBlocks = this.placedBlocks.children
//     const removeSpeed = 0.2
//     const delayAmount = 0.02

//     // Remove blocks with animation
//     for (let i = 0; i < oldBlocks.length; i++) {
//       const block = oldBlocks[i] as THREE.Mesh
//       const delay = (oldBlocks.length - i) * delayAmount

//       // Animate block removal with direct manipulation instead of GSAP
//       setTimeout(() => {
//         const shrinkBlock = () => {
//           if (block.scale.x > 0.01) {
//             block.scale.x *= 0.9
//             block.scale.y *= 0.9
//             block.scale.z *= 0.9
//             block.rotation.y += 0.1
//             requestAnimationFrame(shrinkBlock)
//           } else {
//             this.placedBlocks.remove(block)
//           }
//         }
//         shrinkBlock()
//       }, delay * 1000)
//     }

//     const cameraMoveSpeed = removeSpeed * 2 + oldBlocks.length * delayAmount
//     this.stage.setCamera(2, cameraMoveSpeed)

//     // Animate score countdown
//     const initialScore = this.blocks.length - 1
//     const countdownDuration = cameraMoveSpeed * 1000
//     const startTime = Date.now()

//     const animateScore = () => {
//       const elapsed = Date.now() - startTime
//       const progress = Math.min(elapsed / countdownDuration, 1)
//       const currentScore = Math.round(initialScore * (1 - progress))

//       this.scoreContainer.innerHTML = String(currentScore)

//       if (progress < 1) {
//         requestAnimationFrame(animateScore)
//       }
//     }

//     animateScore()

//     this.blocks = this.blocks.slice(0, 1)

//     setTimeout(() => {
//       this.startGame()
//     }, cameraMoveSpeed * 1000)
//   }

//   placeBlock(): void {
//     const currentBlock = this.blocks[this.blocks.length - 1]
//     const newBlocks = currentBlock.place()

//     this.newBlocks.remove(currentBlock.mesh)

//     if (newBlocks.placed) {
//       this.placedBlocks.add(newBlocks.placed)
//     }

//     if (newBlocks.chopped) {
//       this.choppedBlocks.add(newBlocks.chopped)

//       const chopped = newBlocks.chopped as THREE.Mesh
//       const rotateRandomness = 10

//       // Set initial position and rotation
//       const initialPosition = { ...chopped.position }
//       const targetPosition = { ...initialPosition }
//       targetPosition.y -= 30

//       if (chopped.position[newBlocks.plane] > (newBlocks.placed as THREE.Mesh).position[newBlocks.plane]) {
//         targetPosition[newBlocks.plane] += 40 * Math.abs(newBlocks.direction)
//       } else {
//         targetPosition[newBlocks.plane] -= 40 * Math.abs(newBlocks.direction)
//       }

//       const rotationX = newBlocks.plane === "z" ? Math.random() * rotateRandomness - rotateRandomness / 2 : 0.1
//       const rotationZ = newBlocks.plane === "x" ? Math.random() * rotateRandomness - rotateRandomness / 2 : 0.1

//       // Animate falling with direct manipulation instead of GSAP
//       const startTime = Date.now()
//       const duration = 1000 // 1 second

//       const animateFall = () => {
//         const elapsed = Date.now() - startTime
//         const progress = Math.min(elapsed / duration, 1)

//         // Position interpolation
//         chopped.position.x = initialPosition.x + (targetPosition.x - initialPosition.x) * progress
//         chopped.position.y = initialPosition.y + (targetPosition.y - initialPosition.y) * progress
//         chopped.position.z = initialPosition.z + (targetPosition.z - initialPosition.z) * progress

//         // Rotation
//         chopped.rotation.x += rotationX * 0.05
//         chopped.rotation.z += rotationZ * 0.05
//         chopped.rotation.y += 0.05

//         if (progress < 1) {
//           requestAnimationFrame(animateFall)
//         } else {
//           this.choppedBlocks.remove(chopped)
//         }
//       }

//       setTimeout(() => {
//         animateFall()
//       }, 50) // Small delay before animation starts
//     }

//     this.addBlock()
//   }

//   addBlock(): void {
//     const lastBlock = this.blocks[this.blocks.length - 1]

//     if (lastBlock && lastBlock.state === "missed") {
//       return this.endGame()
//     }

//     // Update score to show the number of blocks stacked
//     const blocksStacked = this.blocks.length - 1
//     if (this.scoreContainer) {
//       this.scoreContainer.innerHTML = String(blocksStacked)
//     }

//     // Update game over score - add null check
//     if (this.gameOverScore) {
//       this.gameOverScore.textContent = String(blocksStacked)
//     }

//     const newKidOnTheBlock = new Block(lastBlock)
//     this.newBlocks.add(newKidOnTheBlock.mesh)
//     this.blocks.push(newKidOnTheBlock)

//     this.stage.setCamera(this.blocks.length * 2)

//     if (this.blocks.length >= 5 && this.instructions) {
//       this.instructions.classList.add("hide")
//     }
//   }

//   endGame(): void {
//     this.updateState(this.STATES.ENDED)
//   }

//   tick = (): void => {
//     if (this.blocks.length) {
//       this.blocks[this.blocks.length - 1].tick()
//     }
//     this.stage.render()
//     this.animationFrameId = requestAnimationFrame(this.tick)
//   }

//   dispose(): void {
//     if (this.animationFrameId !== null) {
//       cancelAnimationFrame(this.animationFrameId)
//     }

//     // Remove event listeners
//     document.removeEventListener("keydown", this.onAction)
//     document.removeEventListener("click", this.onAction)
//     document.removeEventListener("touchstart", this.onAction)

//     // Dispose of Three.js resources
//     this.stage.renderer.dispose()

//     // Remove DOM elements
//     if (this.stage.container.contains(this.stage.renderer.domElement)) {
//       this.stage.container.removeChild(this.stage.renderer.domElement)
//     }
//   }
// }

// interface BlockStackingGameProps {
//   title?: string
//   gameOverTitle?: string
//   gameOverMessage?: string
//   gameOverAction?: string
//   showScore?: boolean
// }

// const BlockStackingGame: React.FC<BlockStackingGameProps> = ({
//   title = "Block Stacking Game",
//   gameOverTitle = "Game Over",
//   gameOverMessage = "You did great, you're the best.",
//   gameOverAction = "Click or spacebar to start again",
//   showScore = true,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const gameInstanceRef = useRef<Game | null>(null)
//   const [score, setScore] = useState(0)
//   const [gameState, setGameState] = useState<GameState>("loading")
//   const controls = useAnimation()

//   useEffect(() => {
//     if (!containerRef.current) return

//     const container = containerRef.current
//     const gameElement = container.querySelector("#game") as HTMLElement
//     const scoreElement = container.querySelector("#score") as HTMLElement
//     const startButton = container.querySelector("#start-button") as HTMLElement
//     const instructions = container.querySelector("#instructions") as HTMLElement
//     const titleElement = container.querySelector("#game-title") as HTMLElement
//     const gameOverTitle = container.querySelector("#game-over-title") as HTMLElement
//     const gameOverMessage = container.querySelector("#game-over-message") as HTMLElement
//     const gameOverAction = container.querySelector("#game-over-action") as HTMLElement
//     const gameOverScore = container.querySelector("#game-over-score") as HTMLElement

//     // Create game instance
//     const gameInstance = new Game(
//       container,
//       scoreElement,
//       startButton,
//       instructions,
//       titleElement,
//       gameOverTitle,
//       gameOverMessage,
//       gameOverAction,
//       gameOverScore,
//     )
//     gameInstanceRef.current = gameInstance

//     // Set up score observer
//     const scoreObserver = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "characterData") {
//           setScore(Number.parseInt(scoreElement.textContent || "0", 10))
//         }
//       })
//     })

//     scoreObserver.observe(scoreElement, { characterData: true, subtree: true })

//     // Set up state observer
//     const stateObserver = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "attributes" && mutation.attributeName === "class") {
//           const newClasses = container.className
//           if (newClasses.includes("playing")) setGameState("playing")
//           else if (newClasses.includes("ready")) setGameState("ready")
//           else if (newClasses.includes("ended")) setGameState("ended")
//           else if (newClasses.includes("resetting")) setGameState("resetting")
//           else if (newClasses.includes("loading")) setGameState("loading")
//         }
//       })
//     })

//     stateObserver.observe(container, { attributes: true })

//     // Clean up
//     return () => {
//       if (gameInstanceRef.current) {
//         gameInstanceRef.current.dispose()
//       }
//       scoreObserver.disconnect()
//       stateObserver.disconnect()
//     }
//   }, [])

//   return (
//     <div 
//       ref={containerRef} 
//       className="w-full h-full relative overflow-hidden"
//       style={{ 
//         aspectRatio: '16/9',
//         minHeight: '400px'
//       }}
//     >
//       <div id="container" className="w-full h-full">
//         <div id="game" className="absolute inset-0"></div>

//         {/* Game title - always visible */}
//         <motion.div
//           id="game-title"
//           className="absolute top-4 w-full text-center text-3xl font-bold text-[#333344] z-20 bg-white/30 py-2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {title}
//         </motion.div>

//         {/* Score - always visible */}
//         <motion.div
//           id="score"
//           className="absolute top-16 w-full text-center text-8xl font-bold text-[#333344] z-20"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           {score}
//         </motion.div>

//         <motion.div
//           id="instructions"
//           className="absolute w-full top-[30vh] left-0 text-center text-[#333344] text-xl font-semibold z-20 bg-white/30 py-2"
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: gameState === "playing" && score < 5 ? 1 : 0,
//             y: gameState === "playing" && score < 5 ? 0 : 10,
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           Click (or press the spacebar) to place the block
//         </motion.div>

//         {/* Game over screen */}
//         <AnimatePresence>
//           {gameState === "ended" && (
//             <motion.div
//               className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30 bg-white/50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.h2
//                 id="game-over-title"
//                 className="text-[#333344] text-5xl font-bold mb-4"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 {gameOverTitle}
//               </motion.h2>
//               <motion.p
//                 id="game-over-message"
//                 className="text-[#333344] text-xl mb-2"
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//               >
//                 {gameOverMessage}
//               </motion.p>
//               <motion.p
//                 id="game-over-action"
//                 className="text-[#333344] text-lg mb-6"
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 {gameOverAction}
//               </motion.p>
//               {showScore && (
//                 <motion.p
//                   className="text-[#333344] text-3xl font-bold"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                 >
//                   Blocks stacked: <span id="game-over-score">{score}</span>
//                 </motion.p>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Start screen */}
//         <AnimatePresence>
//           {gameState === "ready" && (
//             <motion.div
//               className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30 bg-white/50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div
//                 id="start-button"
//                 className="border-4 border-[#333344] py-3 px-8 bg-white text-[#333344] text-3xl font-bold rounded-lg cursor-pointer hover:bg-[#333344] hover:text-white transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Start
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

// export default BlockStackingGame
