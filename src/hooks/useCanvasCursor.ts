import { useEffect } from "react";

interface Config {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
  spring?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Line {
  spring: number;
  friction: number;
  nodes: Node[];
  init: (config: Config) => void;
  update: () => void;
  draw: () => void;
}

interface CanvasContext extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

const useCanvasCursor = () => {
  class Oscillator {
    phase!: number;
    offset!: number;
    frequency!: number;
    amplitude!: number;

    constructor(config: Config) {
      this.init(config || {});
    }

    init(config: Config): void {
      this.phase = config.phase || 0;
      this.offset = config.offset || 0;
      this.frequency = config.frequency || 0.001;
      this.amplitude = config.amplitude || 1;
    }

    update(): number {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  }

  class LineClass implements Line {
    spring!: number;
    friction!: number;
    nodes!: Node[];

    constructor(config: Config) {
      this.init(config || {});
    }

    init(config: Config): void {
      this.spring = (config.spring || 0) + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];

      for (let n = 0; n < E.size; n++) {
        const node: Node = {
          x: pos.x,
          y: pos.y,
          vx: 0,
          vy: 0,
        };
        this.nodes.push(node);
      }
    }

    update(): void {
      let spring = this.spring;
      let node = this.nodes[0];

      node.vx += (pos.x - node.x) * spring;
      node.vy += (pos.y - node.y) * spring;

      for (let i = 0, len = this.nodes.length; i < len; i++) {
        node = this.nodes[i];

        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * E.dampening;
          node.vy += prev.vy * E.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= E.tension;
      }
    }

    draw(): void {
      let node: Node;
      let next: Node;
      let x = this.nodes[0].x;
      let y = this.nodes[0].y;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
        node = this.nodes[i];
        next = this.nodes[i + 1];
        x = 0.5 * (node.x + next.x);
        y = 0.5 * (node.y + next.y);
        ctx.quadraticCurveTo(node.x, node.y, x, y);
      }

      node = this.nodes[this.nodes.length - 2];
      next = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(node.x, node.y, next.x, next.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  function onMousemove(e: MouseEvent | TouchEvent): void {
    function initLines(): void {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new LineClass({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }
    }

    function handleMove(e: MouseEvent | TouchEvent): void {
      if ("touches" in e) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      e.preventDefault();
    }

    function handleTouch(e: TouchEvent): void {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }

    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchstart", handleTouch);
    handleMove(e);
    initLines();
    render();
  }

  function render(): void {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.2)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < E.trails; i++) {
        const line = lines[i];
        line.update();
        line.draw();
      }

      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas(): void {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  let ctx: CanvasContext;
  let oscillator: Oscillator;
  const pos = { x: 0, y: 0 };
  let lines: Line[] = [];
  const E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  const renderCanvas = (): void => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) return;

    ctx = canvas.getContext("2d") as CanvasContext;
    ctx.running = true;
    ctx.frame = 1;
    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      ctx.running = true;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx.running = true;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useCanvasCursor;
