function getElementOrLocalStorage(key, defaultElementId) {
  const storedValue = localStorage.getItem(key);
  const element = document.getElementById(defaultElementId);
  if (storedValue) {
    element.value = storedValue;
  } else {
    localStorage.setItem(key, element.value);
  }
  return element;
}

// Initialize elements with local storage values or defaults
const canvas = document.getElementById('canvas');
const faceColor = getElementOrLocalStorage('faceColor', 'face-color');
const borderColor = getElementOrLocalStorage('borderColor', 'border-color');
const lineColor = getElementOrLocalStorage('lineColor', 'line-color');
const largeHandColor = getElementOrLocalStorage('largeHandColor', 'large-hand-color');
const secondHandColor = getElementOrLocalStorage('secondHandColor', 'second-hand-color');

// Add event listeners to save the colors to local storage when they change
document.getElementById('face-color').addEventListener('input', (e) => {
  localStorage.setItem('faceColor', e.target.value);
});
document.getElementById('border-color').addEventListener('input', (e) => {
  localStorage.setItem('borderColor', e.target.value);
});
document.getElementById('line-color').addEventListener('input', (e) => {
  localStorage.setItem('lineColor', e.target.value);
});
document.getElementById('large-hand-color').addEventListener('input', (e) => {
  localStorage.setItem('largeHandColor', e.target.value);
});
document.getElementById('second-hand-color').addEventListener('input', (e) => {
  localStorage.setItem('secondHandColor', e.target.value);
});

function clock() {
  const now = new Date();
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // Put 0,0 in the middle
  ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw minute lines
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate(
      (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw min hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Draw sec hand
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default state

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});
