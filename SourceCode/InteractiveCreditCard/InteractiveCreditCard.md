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
* `backface-visibility: hidden;`: Configured on both `.front` and `.back` nodes to hide the reversed element face from view when rotated.
* `autocomplete="off"`: Standard financial form practice. Prevents browsers from storing and auto-populating highly sensitive user credentials.

---

### 🎨 2. Style & Interaction Architecture (CSS)

#### The 3D Engine Setup

.card-space { perspective: 1000px; }
.credit-card { transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.credit-card.flipped { transform: rotateY(180deg); }

* **`perspective: 1000px`**: Creates a virtual camera distance from the screen object. Without this property, 3D rotations look completely flat, uniform, and two-dimensional.
* **`transform-style: preserve-3d`**: Explicitly instructs the browser DOM compiler that child nodes must preserve their positioning along the Z-axis rather than flattening into a single layer.
* **`cubic-bezier(0.4, 0, 0.2, 1)`**: Custom non-linear transition timing equation that adds acceleration and weight mechanics to the flip animation, mimicking hardware interface states.

#### The Glassmorphism Effect

background: rgba(10, 15, 30, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(0, 243, 255, 0.2);

* **`background: rgba(...)`**: Sets a highly translucent background layer using an alpha transparency setting of `0.7`.
* **`backdrop-filter: blur(12px)`**: Samples pixel coordinates positioned structurally behind the component element card matrix and applies a Gaussian mathematical blur engine to them in real time.
* **`border: 1px solid rgba(...)`**: Creates a crisp, illuminated vector boundary around the glass panel edge to prevent the component from dissolving visually into dark gradients.

---

### ⚡ 3. Logic & Event Integration (JavaScript)

#### Input Sanitization & Dynamic Formatting

inputNumber.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
  let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
  e.target.value = formatted;
  viewNumber.textContent = formatted === '' ? '•••• •••• •••• ••••' : formatted;
});

* **`.replace(/\s+/g, '')`**: Global regex matcher engine that dynamically scans the array sequence and strips out existing whitespace blocks to isolate clean digits.
* **`.replace(/[^0-9]/g, '')`**: Regular expression inversion matcher that matches any input token that is *not* a number and sets it to an empty string, creating an input firewall.
* **`.match(/.{1,4}/g)`**: Evaluates strings using regex blocks, chunking long strings into small matrix groups containing up to 4 values.
* **`?.join(' ')`**: Array mapping mechanic that strings individual string array fragments back together using a single clear spacer character.
* **`ternary operator (? :)`**: Fast inline logical condition check. If the input evaluated string is empty, it fallback overrides the target payload to show the initial placeholder mask.

#### The Focus Listener State Machinery

inputCvv.addEventListener('focus', () => card.classList.add('flipped'));
inputCvv.addEventListener('blur', () => card.classList.remove('flipped'));

* **`focus`**: Fires instantly when a user clicks, taps, or tabs into the CVV code input box field, adding the CSS tag rule `.flipped` to rotate the card stack.
* **`blur`**: Activates immediately when structural browser focus switches away from the CVV field block, stripping the styling tag and returning the card to its default layout view.

#### Form Submission Pipeline

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isFormValid = !document.querySelectorAll('.input-group.invalid').length;
});

* **`e.preventDefault()`**: Halts default browser submit protocols to prevent page refreshes, maintaining clean memory heaps and letting the JavaScript engine safely parse data payload transfers.
* **`document.querySelectorAll('.input-group.invalid').length`**: Counts total visual DOM error elements matching invalid class states. If that tally is higher than zero, it blocks application submission routines.
