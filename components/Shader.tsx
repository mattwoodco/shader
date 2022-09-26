import { useEffect, useRef } from 'react'

const shader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = 6.0 * fragCoord/u_resolution.xy;
    
    for (int n = 1; n < 5; n++) {
        float i = float(n);
        uv += vec2(1.0 / i * sin(i * uv.y + u_time / 10.0 * i * 2.0) + 0.8, 1.0 / i * sin(uv.x + u_time / 10.0 * i) + 1.6);
    }
     
    
    vec3 color = vec3(1, sin(uv.x + uv.y),1);
    color *= vec3(0.475,0.678,0.984);


    // Output to screen
    fragColor = vec4(color,1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}

`
// Render Shadertoy shaders in React
export default function Shader() {
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const init = async () => {
      let GlslCanvas = require('glslCanvas').default
      var sandbox = new GlslCanvas(canvasRef.current)
      sandbox.load(shader)
      canvasRef.current!.style.width = '100%'
      canvasRef.current!.style.height = '100%'
    }
    if (canvasRef.current && window) {
      init()
    }
  }, [canvasRef])

  return (
    <canvas
      ref={canvasRef}
      className="fixed -z-10 h-full w-full opacity-50 mix-blend-luminosity"
    />
  )
}
