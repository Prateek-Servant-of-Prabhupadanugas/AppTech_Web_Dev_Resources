# 💳 Project Blueprint: Interactive Cyberpunk Credit Card Form

This documentation provides an engineering teardown of the high-fidelity, responsive 3D card checkout system. The codebase transitions standard form capture into an immersive, production-grade visual application.

---

## 🛠️ Implemented Features Matrix

* **Bi-Directional 3D Matrix Flipping:** Utilizing CSS 3D perspectives to execute low-latency card rotation when focusing on security parameters (CVV fields).
* **Real-Time Data Mirroring & State Sync:** Synchronizing user keyboard entries instantly with the floating glassmorphic card elements using the browser DOM event loop.
* **Automatic Input Formatting Engines:** Regular Expression (Regex) patterns that sanitize text, handle spaces, and format numbers dynamically into financial layout blocks (4-4-4-4).
* **Instant Visual Feedback & Validation:** Applying dynamic style overrides and targeting specific error tags to warn users of length mismatches or validation errors before submission.

---

## 🏛️ Comprehensive Code Teardown

### 🖥️ 1. Markup Decomposition (HTML)

* `<!DOCTYPE html>`: Notifies the browser engine to render the document structure using standard HTML5 standards.
* `<div class="card-space">`: Acts as a 3D theater node. Its sole job is to establish the perspective lens so child elements can warp in 3D dimensions.
* `<div class="credit-card" id="card">`: The master card element containing the front and back face nodes. It toggles the `.flipped` class to trigger 3D transitions.
* `backface-visibility: hidden;` (Applied in CSS): Configured on both `.front` and `.back` nodes to hide the reversed element face from view when rotated.
* `autocomplete="off"`: Standard financial form practice. Prevents browsers from storing and auto-populating highly sensitive user credentials.

---

## 🎨 2. Style & Interaction Architecture (CSS)



### The 3D Engine Setup
```css
.card-space {
  perspective: 1000px;
}
.credit-card {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.credit-card.flipped {
  transform: rotateY(180deg);
}
