export type MotionOptions = {
  stiffness?: number;
  damping?: number;
};

export function forge(target: HTMLElement | string, options?: MotionOptions) {
  const el =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (!el) {
    console.warn("[MotionForge] Element bulunamadı.");
    return;
  }

  console.log("[MotionForge] forge() çalıştı:", el, options);

  return {
    destroy() {
      console.log("[MotionForge] forge() destroy edildi.");
    }
  };
}
